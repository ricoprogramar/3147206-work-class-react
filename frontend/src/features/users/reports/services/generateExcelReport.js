// src/features/users/reports/services/generateExcelReport.js
// Versión final realista (limitación respetada)

import * as XLSX from "xlsx";

export function generateExcelReport({
  headers,
  rows,
  fileName = "user-report.xlsx",
}) {
  const currentDate = new Date().toLocaleDateString();
  const reportTitle = `******* REPORTE DE USUARIOS - ${currentDate} *******`;

  const worksheetData = [[], [reportTitle], [], headers, ...rows];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // Merge visual
  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  worksheet["!merges"] = [
    {
      s: { r: 0, c: 0 },
      e: { r: 0, c: range.e.c },
    },
  ];

  // Ancho columnas
  worksheet["!cols"] = headers.map(() => ({ wch: 25 }));

  // Altura fila título (simulación impacto visual)
  worksheet["!rows"] = [{ hpt: 25 }];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

  XLSX.writeFile(workbook, fileName);
}
