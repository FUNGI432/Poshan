"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Settings,
  FileText,
  User,
  Bell,
  Search,
  Calendar,
  PieChart,
  MessageSquare,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReportComponent from "@/components/ReportComponent";
import ChatComponent from "@/components/chatcomponent";

const Home = () => {
  const { toast } = useToast();
  const [reportData, setReportData] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("Updated Report Data:", reportData);
  }, [reportData]);

  const onReportConfirmation = (data: string) => {
    if (!data) {
      toast({
        variant: "destructive",
        description: "Report data is empty!",
        icon: <X className="h-4 w-4" />,
      });
      return;
    }

    setReportData(data);
    toast({
      title: "Report Confirmed",
      description:
        "Medical report successfully updated and ready for analysis.",
      icon: <FileText className="h-4 w-4" />,
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const recentActivities = [
    {
      id: 1,
      title: "Blood Test Results Uploaded",
      time: "Today, 10:23 AM",
      status: "new",
    },
    {
      id: 2,
      title: "Consultation Scheduled with Dr. Williams",
      time: "Tomorrow, 2:00 PM",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Medication Reminder: Antibiotics",
      time: "Today, 8:00 PM",
      status: "pending",
    },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b shadow-sm flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search medical records, reports..."
                className="w-full pl-10 pr-4 py-2 bg-muted/30 focus-visible:ring-1 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 md:hidden">
                <AvatarImage src="/avatar-doctor.png" alt="User" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Reports Panel */}
          <div className="hidden lg:flex flex-col w-[350px] border-r bg-white dark:bg-slate-800 overflow-hidden">
            <div className="p-4 border-b bg-muted/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Medical Reports
                </h2>
                <Button size="sm" variant="secondary">
                  <span className="text-xs">New Report</span>
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <ReportComponent onReportConfirmation={onReportConfirmation} />
            </div>
          </div>

          {/* Main Panel */}
          <div className="flex-1 flex flex-col bg-muted/20 overflow-hidden">
            {/* Mobile View Drawer Trigger */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden mx-4 mt-6 mb-2 w-full py-2 text-sm"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Medical Reports
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[90vh]">
                <div className="p-4 max-h-[80vh] overflow-auto">
                  <ReportComponent
                    onReportConfirmation={onReportConfirmation}
                  />
                </div>
              </DrawerContent>
            </Drawer>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 overflow-auto">
              <div className="max-w-5xl mx-auto">
                {/* Page Header */}
                <div className="mt-2 mb-6">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Patient Analysis
                  </h1>
                  <p className="text-muted-foreground">
                    Review medical reports and get AI-powered insights.
                  </p>
                </div>

                {/* Tabs Container */}
                <Tabs
                  defaultValue="chat"
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="space-y-4"
                >
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    <TabsTrigger value="chat" className="rounded-md">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      AI Assistant
                    </TabsTrigger>
                    <TabsTrigger value="activity" className="rounded-md">
                      <Calendar className="h-4 w-4 mr-2" />
                      Recent Activity
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="chat" className="space-y-4">
                    <Card className="border bg-card">
                      <CardHeader className="bg-muted/50 py-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-primary p-10" />
                          Medical AI Assistant
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <div className="h-[60vh] overflow-hidden">
                          <ChatComponent reportData={reportData} />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="activity" className="space-y-4">
                    <Card>
                      <CardHeader className="py-4">
                        <CardTitle>Recent Activities</CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 pb-4">
                        <div className="space-y-4">
                          {recentActivities.map((activity) => (
                            <div
                              key={activity.id}
                              className="flex items-start space-x-4 p-3 border rounded-lg"
                            >
                              <div
                                className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center 
                                ${
                                  activity.status === "new"
                                    ? "bg-blue-100 text-blue-600"
                                    : activity.status === "upcoming"
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-amber-100 text-amber-600"
                                }`}
                              >
                                {activity.status === "new" ? (
                                  <FileText className="h-5 w-5" />
                                ) : activity.status === "upcoming" ? (
                                  <Calendar className="h-5 w-5" />
                                ) : (
                                  <Bell className="h-5 w-5" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium">
                                    {activity.title}
                                  </p>
                                  <Badge
                                    variant={
                                      activity.status === "new"
                                        ? "default"
                                        : activity.status === "upcoming"
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {activity.status === "new"
                                      ? "New"
                                      : activity.status === "upcoming"
                                      ? "Upcoming"
                                      : "Pending"}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {activity.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
