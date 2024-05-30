export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function downloadPDF(pdfUrl: string, pdfFileName: string): void {
  fetch(pdfUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao baixar o PDF: " + response.status);
      }
      return response.blob();
    })
    .then((blob) => {
      // Cria um objeto URL temporário para o blob
      const url = window.URL.createObjectURL(blob);

      // Cria um elemento <a> para iniciar o download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", pdfFileName);

      // Adiciona o elemento <a> ao DOM
      document.body.appendChild(link);

      // Simula um clique no link para iniciar o download
      link.click();

      // Remove o elemento <a> do DOM após o download
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Erro ao baixar o PDF:", error);
    });
}
