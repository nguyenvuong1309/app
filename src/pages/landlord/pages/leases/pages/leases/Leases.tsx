"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../../components/ui/card";
import dynamic from "next/dynamic";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { AdminSideBar } from "../../../../components/AdminSidebar";
import AdminHeader from "../../../../components/AdminHeader";
import { useNavigate } from "react-router";
// const PDFViewer = dynamic(() => import("./pdf-viewer"), { ssr: false })

interface FilePreview {
  name: string;
  size: number;
  url: string;
}

export const LeaseUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<FilePreview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    return () => {
      // Clean up the object URL when the component unmounts
      if (preview) {
        URL.revokeObjectURL(preview.url);
      }
    };
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file.");
        return;
      }
      setError(null);
      setSelectedFile(file);
      const fileUrl = URL.createObjectURL(file);
      setPreview({
        name: file.name,
        size: file.size,
        url: fileUrl,
      });
    }
  };

  const handleRemoveFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview.url);
    }
    setSelectedFile(null);
    setPreview(null);
    setError(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const onStartLease = () => {
    navigate("/landlord/leases-builder/property-information");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              LuxOasis Lease Builder
            </CardTitle>
            <CardDescription>
              Develop a comprehensive lease through our easy step-by-step Lease
              Builder.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="bg-teal-600 hover:bg-teal-700"
              onClick={onStartLease}
            >
              Start a Lease
            </Button>
          </CardContent>
        </Card>

        {/* Right Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Upload Files</CardTitle>
            <CardDescription>
              Already have your own lease? Upload it here to view it on your
              account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              {!preview ? (
                <div className="relative w-full">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf"
                  />
                  <div className="border-2 border-dashed border-teal-600 rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-teal-600" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supports PDF files
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      <span className="font-medium">{preview.name}</span>
                      <span className="text-sm text-muted-foreground">
                        ({formatFileSize(preview.size)})
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleRemoveFile}
                      className="h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    {/* <PDFViewer fileUrl={preview.url} /> */}
                  </div>
                </div>
              )}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
