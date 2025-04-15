"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { FileText, Upload, CheckCircle2, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import ReportComponent from "@/components/ReportComponent";
import { useToast } from "@/hooks/use-toast";
import ChatComponent from "@/components/chatcomponent";

const Home = () => {
  const { toast } = useToast();
  const [reportData, setReportData] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    console.log("Updated Report Data:", reportData);
  }, [reportData]);

  const onReportConfirmation = (data: string) => {
    if (!data) {
      toast({ variant: "destructive", description: "Report data is empty!" });
      return;
    }

    setReportData(data);
    setIsDrawerOpen(false);
    toast({
      title: "Report Confirmed",
      description: "Medical report successfully updated.",
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
      {/* Mobile Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-background sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-green-600" />
          <h1 className="font-semibold">Medical Reports</h1>
        </div>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Upload className="w-5 h-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[80vh]">
            <div className="p-4 overflow-auto">
              <DrawerTitle className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-green-600" />
                <span>Upload Medical Report</span>
              </DrawerTitle>
              <ReportComponent onReportConfirmation={onReportConfirmation} />
            </div>
          </DrawerContent>
        </Drawer>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {reportData ? (
          <div className="h-full flex flex-col">
            {/* Report Summary Section */}
            <div className="h-[200px] overflow-auto p-4 space-y-4 border-b">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Report Summary</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 whitespace-pre-wrap text-sm">
                {reportData}
              </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 p-4 bg-background">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <span className="font-medium">Ask Questions</span>
              </div>
              <ChatComponent reportData={reportData} />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <Upload className="w-12 h-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Report Uploaded</h2>
            <p className="text-muted-foreground mb-4">
              Upload a medical report to get started with analysis
            </p>
            <Button 
              onClick={() => setIsDrawerOpen(true)}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload Report
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
