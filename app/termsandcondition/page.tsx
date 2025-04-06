import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>

          <p>
            By using this application, you agree to the following terms and
            conditions. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold">Use of AI</h2>
          <p>
            This application utilizes Artificial Intelligence (AI) to generate
            responses, analyze reports, and interpret user queries. While we aim
            to provide helpful and accurate results, the AI may occasionally
            produce incorrect or unpredictable outcomes.
          </p>

          <h2 className="text-xl font-semibold">No Responsibility Clause</h2>
          <p>
            We do not take any responsibility for the results, decisions, or
            actions taken based on the output provided by this application.
            Users are solely responsible for how they use the information
            generated.
          </p>

          <h2 className="text-xl font-semibold">Data Usage</h2>
          <p>
            By using this service, you acknowledge that your input data may be
            processed to improve performance. We do not share your data with
            third parties without your consent.
          </p>

          <p className="text-sm text-gray-500">
            These terms may be updated from time to time. Continued use of the
            application indicates your acceptance of the latest version.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;
