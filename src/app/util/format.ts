import { Experience } from "@/data/local/ExperienceData";
import moment from "moment";
import React from "react";

export function formatDateRange(date1: string, date2: string): string {
  const start = moment(date1, "DD/MM/YYYY");
  const end = moment(date2, "DD/MM/YYYY");

  const duration = moment.duration(end.diff(start));
  const years = duration.years();
  const months = duration.months();

  let result = "";

  if (years > 0) {
    result += `${years} ${years > 1 ? "anos" : "ano"}`;
  }

  if (months > 0) {
    if (result) result += " e ";
    result += `${months} ${months > 1 ? "meses" : "mês"}`;
  } else if (!result) {
    result = "1 mês";
  }

  return result;
}

export function formatDate(date: string): string {
  const today = moment();
  const targetDate = moment(date, "DD/MM/YYYY");

  if (targetDate.isSame(today, "day")) {
    return "o momento";
  } else {
    const month = targetDate.format("MMM");
    const year = targetDate.format("YYYY");
    return `${month} de ${year}`;
  }
}

export function formatTxtLocation(experience: Experience): string {
  return [
    experience.city && experience.city,
    experience.state && experience.state,
    experience.country &&
      `${experience.country} · ${experience.tipoDeLocalidade}`,
  ]
    .filter(Boolean)
    .join(", ");
}

export function boldWordsInText(text: string, wordsToBold: string[]): string {
  const boldedText = text.replace(
    new RegExp(wordsToBold.join("|"), "gi"),
    (matched) => `<span class="font-semibold">${matched}</span>`
  );
  return boldedText;
}

export function cleanURL(url: string): string {
  // Remove initial part
  let cleanURL = url.replace(/^https?:\/\/(www\.)?/, "");

  // Remove trailing slash if exists
  if (cleanURL.endsWith("/")) {
    cleanURL = cleanURL.slice(0, -1);
  }

  return cleanURL;
}

export const formatTextWithLineBreaks = (text: string): React.ReactNode[] => {
  const formattedText = text.split("\n");
  const elements: React.ReactNode[] = [];

  formattedText.forEach((line, index) => {
    elements.push(React.createElement(React.Fragment, { key: index }, line));

    if (index < formattedText.length - 1) {
      elements.push(React.createElement("br", { key: `br-${index}` }));
    }
  });

  console.log('elements: ', elements);
  return elements;
};
