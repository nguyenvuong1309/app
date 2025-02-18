"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "../../../../../../../components/ui/button";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    setCurrentPage(1);
    setShowFullPreview(false);
    setError(null);
    setLoading(true); // Set loading to true on fileUrl change
  }, [fileUrl]); //Corrected dependency array

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
    setLoading(false); // Set loading to false after successful load
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error);
    setError("Error loading PDF. Please try again.");
    setLoading(false); // Set loading to false after error
  };

  if (loading) {
    // Added loading indicator
    return <div className="text-center">Loading PDF...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <div
        className={`${
          showFullPreview ? "h-[600px]" : "h-[300px]"
        } overflow-auto`}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex flex-col items-center"
        >
          {showFullPreview ? (
            Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={600}
                className="mb-4"
              />
            ))
          ) : (
            <Page pageNumber={currentPage} width={600} />
          )}
        </Document>
      </div>

      <div className="flex justify-between items-center mt-4">
        {!showFullPreview && numPages > 1 && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage <= 1}
            >
              Previous
            </Button>
            <span className="flex items-center text-sm">
              Page {currentPage} of {numPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, numPages))
              }
              disabled={currentPage >= numPages}
            >
              Next
            </Button>
          </div>
        )}
        <Button
          variant="link"
          onClick={() => setShowFullPreview(!showFullPreview)}
          className="ml-auto"
        >
          {showFullPreview ? "Show less" : "Show all pages"}
        </Button>
      </div>
    </>
  );
}
