// 'use client';

// import { useChat } from 'ai/react';
// import { Textarea } from './ui/textarea';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import { CornerDownLeft, Loader2, FileText, ChevronDown } from 'lucide-react';
// import Messages from '@/components/messages';
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import Markdown from '@/components/markdown';

// interface ChatComponentProps {
//   reportData?: string | null;
// }

// const ChatComponent = ({ reportData }: ChatComponentProps) => {
//   const { messages, input, handleInputChange, handleSubmit, isLoading, data } = useChat({
//     api: "/api/medichatgemini",
//   });

//   // Safely extract retrievals data
//   const getRetrievals = () => {
//     if (data && data.length > 0) {
//       const lastData = data[data.length - 1] as any;
//       return lastData?.retrievals || '';
//     }
//     return '';
//   };

//   return (
//     <div className="flex flex-col h-full space-y-4">
//       {/* Status Badge */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-medium">Chat Session</h2>
//         <Badge
//           variant={reportData ? "default" : "secondary"}
//           className={`px-3 py-1 ${reportData ? 'bg-green-500 hover:bg-green-600' : ''}`}
//         >
//           {reportData ? "Report Loaded" : "No Report"}
//         </Badge>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-auto rounded-lg border bg-background p-4">
//         {messages.length > 0 ? (
//           <Messages messages={messages} isLoading={isLoading} />
//         ) : reportData ? (
//           <p className="text-sm text-gray-400">
//             Your report has been loaded. You can now ask questions about it.
//           </p>
//         ) : (
//           <p className="text-sm text-gray-400">
//             No report has been uploaded. You can ask general medical questions.
//           </p>
//         )}
//       </div>

//       {/* Relevant Info Section */}
//       {data && data.length > 0 && getRetrievals() && (
//         <Collapsible className="bg-muted/50 rounded-lg">
//           <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/70 transition-colors">
//             <div className="flex items-center gap-2">
//               <FileText className="w-4 h-4" />
//               <span>Relevant Information</span>
//             </div>
//             <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
//           </CollapsibleTrigger>
//           <CollapsibleContent className="px-4 pb-4">
//             <div className="pt-2 text-sm">
//               {typeof getRetrievals() === 'string' ? (
//                 <Markdown text={getRetrievals()} />
//               ) : (
//                 <p>No relevant information available</p>
//               )}
//             </div>
//           </CollapsibleContent>
//         </Collapsible>
//       )}

//       {/* Input Form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit(e, {
//             data: { reportData: reportData || '' },
//           });
//         }}
//         className="flex flex-col gap-2"
//       >
//         <Textarea
//           value={input}
//           onChange={handleInputChange}
//           placeholder={reportData ? "Ask about your medical report..." : "Ask a general medical question..."}
//           className="min-h-[100px] p-4 rounded-lg resize-none"
//         />
//         <Button
//           type="submit"
//           disabled={isLoading || input.trim() === ""}
//           className="ml-auto"
//         >
//           {isLoading ? (
//             <>
//               <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//               Analyzing...
//             </>
//           ) : (
//             <>
//               Send Message
//               <CornerDownLeft className="w-4 h-4 ml-2" />
//             </>
//           )}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default ChatComponent;
"use client";

import { useChat } from "ai/react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CornerDownLeft, Loader2, FileText, ChevronDown } from "lucide-react";
import Messages from "@/components/messages";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Markdown from "@/components/markdown";

interface ChatComponentProps {
  reportData?: string | null;
}

const ChatComponent = ({ reportData }: ChatComponentProps) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      api: "/api/medichatgemini",
    });

  const getRetrievals = () => {
    if (data && data.length > 0) {
      const lastData = data[data.length - 1] as any;
      return lastData?.retrievals || "";
    }
    return "";
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto space-y-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Chat Session</h2>
        <Badge
          variant={reportData ? "default" : "secondary"}
          className={`text-sm px-3 py-1 rounded-full ${
            reportData
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {reportData ? "Report Loaded" : "No Report"}
        </Badge>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-auto rounded-lg border border-gray-200 bg-gray-50 p-4 max-h-[400px] scroll-smooth">
        {messages.length > 0 ? (
          <Messages messages={messages} isLoading={isLoading} />
        ) : reportData ? (
          <p className="text-sm text-gray-500">
            Your report has been loaded. You can now ask questions about it.
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            No report has been uploaded. You can ask general medical questions.
          </p>
        )}
      </div>

      {/* Relevant Information Section */}
      {data && data.length > 0 && getRetrievals() && (
        <Collapsible className="rounded-xl bg-gray-100 border border-gray-200">
          <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-gray-200 transition-colors rounded-t-xl">
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <FileText className="w-4 h-4" />
              <span>Relevant Information</span>
            </div>
            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4 text-sm text-gray-700">
            <div className="pt-2">
              {typeof getRetrievals() === "string" ? (
                <Markdown text={getRetrievals()} />
              ) : (
                <p>No relevant information available.</p>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, {
            data: { reportData: reportData || "" },
          });
        }}
        className="flex flex-col space-y-3"
      >
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder={
            reportData
              ? "Ask about your medical report..."
              : "Ask a general medical question..."
          }
          className="min-h-[100px] p-4 rounded-lg resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-gray-800"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading || input.trim() === ""}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-lg shadow"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Send Message
                <CornerDownLeft className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatComponent;
