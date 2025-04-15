"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Loader2,
  Search,
  Upload,
  Camera,
  Info,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import CameraCapture from "@/components/CameraCapture";
import ExampleProducts from "@/components/ExampleProducts";
import AnalysisResult from "@/components/AnalysisResult";
import FooterSection from "@/components/layout/sections/footer";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("examples");

  const handleAnalyze = async (imageData: string) => {
    setIsAnalyzing(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });
      const data = await response.json();
      setAnalysisResult(data.analysis);

      // Scroll to results after analysis is complete
      setTimeout(() => {
        const resultsElement = document.getElementById("analysis-results");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-center"></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
              SMART PRODUCT ANALYSIS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
              Ingredient <span className="text-emerald-300">Insight</span>{" "}
              Analyzer
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover what's really in your products with our advanced
              ingredient analysis tool. Make informed choices for your health
              and dietary needs.
            </p>
            <div className="pt-4 flex justify-center space-x-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("analyzer-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="bg-white text-emerald-700 hover:bg-white/90 shadow-lg"
              >
                Start Analyzing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Info className="mr-2 h-4 w-4" />
                How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="currentColor"
              className="text-slate-50 dark:text-slate-950"
              fillOpacity="1"
              d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <main className="container mx-auto px-6 py-16 max-w-7xl space-y-16">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Analysis</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Detailed breakdown of ingredients with health implications and
              allergen warnings.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dietary Insights</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Verification for dietary restrictions including vegan,
              gluten-free, and keto compatibility.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nutritional Data</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Complete nutritional profile with caloric content and
              macronutrient breakdown.
            </p>
          </div>
        </div>

        {/* Main Analyzer Section */}
        <div id="analyzer-section" className="scroll-mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analyze Your Product</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Upload a product image or select from our examples to get
              comprehensive insights about the ingredients and nutritional
              information.
            </p>
          </div>

          <Card className="border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <Tabs
                value={selectedTab}
                onValueChange={setSelectedTab}
                className="w-full"
              >
                <div className="bg-slate-100 dark:bg-slate-900 p-1">
                  <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="examples"
                      className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md text-foreground rounded-xl py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        <span className="font-medium">Example Products</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="upload"
                      className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md text-foreground rounded-xl py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        <span className="font-medium">Upload Image</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="camera"
                      className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md text-foreground rounded-xl py-3"
                    >
                      <div className="flex items-center gap-2">
                        <Camera className="w-5 h-5" />
                        <span className="font-medium">Take Photo</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-8">
                  <TabsContent value="examples" className="mt-0">
                    <ExampleProducts onSelect={setSelectedImage} />
                  </TabsContent>

                  <TabsContent value="upload" className="mt-0">
                    <ImageUploader onImageSelect={setSelectedImage} />
                  </TabsContent>

                  <TabsContent value="camera" className="mt-0">
                    <CameraCapture onCapture={setSelectedImage} />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Selected Image Section */}
        {selectedImage && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-0 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Product Image Column */}
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-500 p-8 flex flex-col items-center justify-center">
                    <div className="relative aspect-square w-full max-w-xs rounded-xl overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={selectedImage}
                        alt="Selected product"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    {/* Product Info Badge */}
                    <div className="mt-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-4 py-3 text-center">
                      <h3 className="text-lg font-semibold text-emerald-700">
                        Product Image
                      </h3>
                      {/* <p className="text-sm text-slate-600">
                        Chocolate Cookies
                      </p> */}
                    </div>
                  </div>

                  {/* Product Info Column */}
                  <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="max-w-xl">
                      <h2 className="text-3xl font-bold mb-4">
                        Ready for Analysis
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                        Our AI will scan this product image to identify
                        ingredients and provide you with:
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mt-1 mr-3">
                            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Ingredient Breakdown
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Full ingredient list with potential allergens
                              highlighted
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mt-1 mr-3">
                            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Nutritional Information
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Calories, macros, vitamins, and minerals
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mt-1 mr-3">
                            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Dietary Compatibility
                            </h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              Suitability for various dietary preferences and
                              restrictions
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleAnalyze(selectedImage)}
                        disabled={isAnalyzing}
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Search className="w-5 h-5 mr-2" />
                            <span>Analyze Ingredients</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analysis Result */}
        {analysisResult && (
          <div
            id="analysis-results"
            className="animate-in fade-in slide-in-from-bottom-4 duration-500 scroll-mt-8"
          >
            <AnalysisResult analysis={analysisResult} />
          </div>
        )}

        {/* Testimonials Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Trusted by Health-Conscious People
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              See what our users are saying about our ingredient analysis
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 dark:text-blue-300">
                    JD
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">Jamie Davis</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Nutritionist
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                "This tool has revolutionized how I advise my clients. The
                detailed breakdown of ingredients helps me quickly identify
                potential allergens."
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-3">
                  <span className="font-bold text-emerald-600 dark:text-emerald-300">
                    SL
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Lee</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Fitness Coach
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                "I recommend this app to all my clients who are serious about
                tracking their macros. The nutritional breakdown is incredibly
                accurate."
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600 dark:text-purple-300">
                    MJ
                  </span>
                </div>
                <div>
                  <h4 className="font-medium">Michael Johnson</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Parent
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                "As a parent of a child with allergies, this tool gives me peace
                of mind when shopping for groceries. It's fast and intuitive."
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
