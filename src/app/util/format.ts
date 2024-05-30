import { Experience } from "@/data/local/ExperienceData";
import moment from "moment";

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