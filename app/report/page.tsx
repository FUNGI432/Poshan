// 'use client';

// import { Button } from "@/components/ui/button";
// import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
// import { Settings, FileText } from "lucide-react";
// import { useState, useEffect } from "react";
// import ReportComponent from "@/components/ReportComponent";
// import { useToast } from "@/hooks/use-toast";
// import ChatComponent from "@/components/chatcomponent";

// const Home = () => {
//   const { toast } = useToast();
//   const [reportData, setReportData] = useState<string | null>(null);

//   useEffect(() => {
//     console.log("Updated Report Data:", reportData);
//   }, [reportData]);

//   const onReportConfirmation = (data: string) => {
//     if (!data) {
//       toast({ variant: "destructive", description: "Report data is empty!" });
//       return;
//     }

//     setReportData(data);
//     toast({ title: "Report Confirmed", description: "Medical report successfully updated." });
//   };

//   return (
//     <div className="flex h-screen bg-background">
//       {/* Sidebar */}
//       <aside className="hidden md:flex w-[350px] flex-col border-r bg-muted/10">
//         <div className="p-4 border-b">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <FileText className="w-5 h-5" />
//             Medical Reports
//           </h2>
//         </div>
//         <div className="flex-1 overflow-auto p-4">
//           <ReportComponent onReportConfirmation={onReportConfirmation} />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="h-14 border-b flex items-center justify-between px-4 bg-background">
//           <Drawer>
//             <DrawerTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Settings className="w-5 h-5" />
//               </Button>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="p-4 max-h-[80vh] overflow-auto">
//                 <ReportComponent onReportConfirmation={onReportConfirmation} />
//               </div>
//             </DrawerContent>
//           </Drawer>
//         </header>

//         <main className="flex-1 p-4">
//           <ChatComponent reportData={reportData} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;

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

  // Mock data for quick stats
  const quickStats = [
    {
      title: "Total Reports",
      value: "12",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Active Patients",
      value: "3",
      icon: <User className="h-5 w-5 text-emerald-500" />,
    },
    {
      title: "Pending Analysis",
      value: "2",
      icon: <PieChart className="h-5 w-5 text-amber-500" />,
    },
  ];

  // Mock data for recent activities
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
                className="w-full pl-9 bg-muted/30 focus-visible:ring-1"
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
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Medical Reports
                </h2>
                <Button size="sm" variant="secondary">
                  <span className="text-xs">New Report</span>
                </Button>
              </div>
              <Input
                placeholder="Search reports..."
                className="bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
                  className="lg:hidden mx-4 mt-4 w-full"
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
                <div className="mb-6">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Patient Analysis
                  </h1>
                  <p className="text-muted-foreground">
                    Review medical reports and get AI-powered insights.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {quickStats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                          {stat.icon}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                          <MessageSquare className="h-5 w-5 text-primary" />
                          Medical AI Assistant
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
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
                      <CardContent>
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
