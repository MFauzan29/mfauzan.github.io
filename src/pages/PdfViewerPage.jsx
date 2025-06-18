// src/pages/PdfViewerPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Tetap impor ini
import "react-pdf/dist/esm/Page/TextLayer.css"; // Tetap impor ini

// Import data proyek untuk mendapatkan judul dokumen
import projects from "../data/projectsData";

pdfjs.GlobalWorkerOptions.workerSrc = "/lib/pdf.worker.min.js";

// Data mapping documentId ke path file PDF di public/documents/
const documentPaths = {
  "food-security-report": "/documents/laporan-food-security.pdf",
  "uihelp-rpl-report": "/documents/RPLProyek.pdf",
  "retroactive-sbd-report": "/documents/laporan-retroactive-sbd.pdf",
};

function PdfViewerPage() {
  // ... (sisa kode komponen PdfViewerPage Anda)
  // Tidak ada perubahan di sini, hanya bagian import dan konfigurasi worker di atas.
  // ...
  const { documentId } = useParams();
  const pdfUrl = documentPaths[documentId];

  const project = projects.find((p) => p.documentId === documentId);
  const pageTitle = project ? project.documentTitle : "Dokumen Proyek";

  const [numPages, setNumPages] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error("Error loading PDF document:", error);
    setIsLoading(false);
    setNumPages(0);
  }

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
        <p className="text-xl">
          Dokumen tidak ditemukan atau belum ditambahkan untuk ID: "{documentId}
          ".
          <br />
          Pastikan ID dokumen di URL dan di `documentPaths` benar, dan file PDF
          ada di folder `public/documents/`.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{pageTitle}</h1>

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 z-10">
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Memuat Dokumen...
            </p>
          </div>
        )}
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="w-full"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="mb-4 shadow-md mx-auto"
            />
          ))}
        </Document>
      </div>

      {numPages && (
        <p className="mt-4 text-center text-slate-700 dark:text-slate-300">
          Total Halaman: {numPages}
        </p>
      )}
    </div>
  );
}

export default PdfViewerPage;
