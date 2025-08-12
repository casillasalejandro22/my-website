"use client";

import { useMemo } from "react";

export default function ResumePage() {
  // Cache-buster so new uploads show immediately (browsers cache PDFs aggressively)
  const pdfSrc = useMemo(() => `/resume.pdf?v=${Date.now()}`, []);

  return (
    <section className="py-6 sm:py-10">
      <div className="mb-4 flex flex-wrap gap-3">
        <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
        <a className="btn btn-outline" href="/resume.pdf" download>
          Download
        </a>
      </div>

      {/* PDF viewer */}
      <div className="card">
        <iframe
          title="Alejandro Casillas — Résumé"
          src={pdfSrc + "#view=FitH"}
          className="w-full"
          style={{ height: "80vh", borderRadius: "12px" }}
        />
      </div>

      <p className="mt-3 text-xs opacity-70">
        If the preview looks blank in some mobile browsers, use “Open PDF”.
      </p>
    </section>
  );
}
