import React, { ChangeEvent, useState, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Loader2, CheckCircle2 } from "lucide-react";

type Props = {
  onReportConfirmation: (data: string) => void;
};

const ReportComponent = ({ onReportConfirmation }: Props) => {
  const { toast } = useToast();
  const [base64Data, setBase64Data] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reportData, setReportData] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleReportSelection = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      toast({ variant: "destructive", description: "No file selected!" });
      return;
    }

    const file = event.target.files[0];
    if (!file) {
      toast({ variant: "destructive", description: "No file selected!" });
      return;
    }

    setFileName(file.name);

    const validImages = ["image/jpeg", "image/png", "image/webp"];
    const validDocs = ["application/pdf"];
    if (![...validImages, ...validDocs].includes(file.type)) {
      toast({ variant: "destructive", description: "Unsupported file type!" });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Data(reader.result as string);
      toast({ description: "File loaded successfully!" });
    };
    reader.readAsDataURL(file);
  };

  async function extractDetails() {
    if (!base64Data) {
      toast({ variant: "destructive", description: "Upload a valid report!" });
      return;
    }

    setIsLoading(true);
    setReportData("");

    try {
      const response = await fetch("/api/extractreportgemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64: base64Data }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to extract report.");

      setReportData(data.text);
      toast({ title: "Report extracted successfully!" });
    } catch (error) {
      console.error("Report extraction error:", error);
      toast({ variant: "destructive", description: "Failed to extract report. Try again." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* File Upload Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-green-600" />
          <Label className="text-base">Upload Medical Report</Label>
        </div>
        
        <div className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleReportSelection}
            accept=".pdf,.jpg,.jpeg,.png,.webp"
          />
          
          <Button 
            onClick={() => fileInputRef.current?.click()} 
            disabled={isLoading}
            className="w-full gap-2"
          >
            <Upload className="w-4 h-4" />
            {fileName || "Select File"}
          </Button>

          {fileName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span className="truncate">{fileName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Extract Button */}
      <Button 
        onClick={extractDetails} 
        disabled={isLoading || !base64Data}
        className="w-full gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Extracting...
          </>
        ) : (
          <>
            <FileText className="w-4 h-4" />
            Extract Report
          </>
        )}
      </Button>

      {/* Report Summary Section */}
      {reportData && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <Label className="text-base">Extracted Report Summary</Label>
          </div>
          
          <Textarea
            value={reportData}
            placeholder="Extracted summary will appear here..."
            onChange={(e) => setReportData(e.target.value)}
            className="min-h-48 resize-none border-0 bg-muted/50 p-4 rounded-lg"
          />

          <Button
            onClick={() => {
              if (!reportData.trim()) {
                toast({ variant: "destructive", description: "No extracted data to confirm!" });
                return;
              }
              onReportConfirmation(reportData);
            }}
            className="w-full gap-2 bg-green-600 hover:bg-green-700"
          >
            <CheckCircle2 className="w-4 h-4" />
            Confirm Report
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReportComponent;