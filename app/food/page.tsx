// "use client";
// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader2, Search, Upload, Camera } from "lucide-react";
// import ImageUploader from "@/components/ImageUploader";
// import CameraCapture from "@/components/CameraCapture";
// import ExampleProducts from "@/components/ExampleProducts";
// import AnalysisResult from "@/components/AnalysisResult";

// export default function Home() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [analysisResult, setAnalysisResult] = useState<string | null>(null);

//   const handleAnalyze = async (imageData: string) => {
//     setIsAnalyzing(true);
//     try {
//       const response = await fetch("/api/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ image: imageData }),
//       });
//       const data = await response.json();
//       setAnalysisResult(data.analysis);
//     } catch (error) {
//       console.error("Analysis failed:", error);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <main className="container mx-auto px-6 py-12 max-w-7xl space-y-12">
//         {/* Header Section */}
//         <div className="text-center space-y-4">
//           <h2 className="text-lg text-primary font-medium tracking-wider">
//             PRODUCT ANALYSIS
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground">
//             Product Ingredient Analyzer
//           </h1>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Simply upload a product image or choose from our examples to get
//             detailed insights about ingredients, nutritional value, and dietary
//             information.
//           </p>
//         </div>

//         {/* Main Content */}
//         <Card className="border-secondary/20 bg-card">
//           <CardContent className="p-8">
//             <Tabs defaultValue="examples" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 gap-4 bg-muted/50 p-2 mb-8">
//                 <TabsTrigger
//                   value="examples"
//                   className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Search className="w-4 h-4" />
//                     <span className="font-semibold">Example Products</span>
//                   </div>
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="upload"
//                   className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Upload className="w-4 h-4" />
//                     <span className="font-semibold">Upload Image</span>
//                   </div>
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="camera"
//                   className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Camera className="w-4 h-4" />
//                     <span className="font-semibold">Take Photo</span>
//                   </div>
//                 </TabsTrigger>
//               </TabsList>

//               <div className="mt-6">
//                 <TabsContent value="examples">
//                   <ExampleProducts onSelect={setSelectedImage} />
//                 </TabsContent>

//                 <TabsContent value="upload">
//                   <ImageUploader onImageSelect={setSelectedImage} />
//                 </TabsContent>

//                 <TabsContent value="camera">
//                   <CameraCapture onCapture={setSelectedImage} />
//                 </TabsContent>
//               </div>
//             </Tabs>
//           </CardContent>
//         </Card>

//         {/* Selected Image Section */}
//         {selectedImage && (
//           <Card className="border-secondary/20 bg-card">
//             <CardContent className="p-8">
//               <div className="flex flex-col md:flex-row items-start gap-8">
//                 <div className="w-full md:w-1/3">
//                   <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
//                     <img
//                       src={selectedImage}
//                       alt="Selected product"
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                   </div>
//                   {/* Product title and description */}
//                   <div className="mt-4 text-center">
//                     <h3 className="text-lg font-medium text-foreground">
//                       🍫 Chocolate Bar
//                     </h3>
//                     <p className="text-sm text-foreground/90">
//                       Parle Hide & Seek Chocolate Cookies
//                     </p>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-2/3 space-y-4">
//                   <h2 className="text-2xl font-bold text-foreground">
//                     Selected Product
//                   </h2>
//                   <p className="text-muted-foreground">
//                     Click analyze to get detailed information about this
//                     product's ingredients, nutritional value, and dietary
//                     considerations.
//                   </p>
//                   <Button
//                     onClick={() => handleAnalyze(selectedImage)}
//                     disabled={isAnalyzing}
//                     className="w-full md:w-auto"
//                     size="lg"
//                     variant="default"
//                   >
//                     {isAnalyzing ? (
//                       <>
//                         <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                         <span className="text-primary-foreground">
//                           Analyzing...
//                         </span>
//                       </>
//                     ) : (
//                       <>
//                         <Search className="w-4 h-4 mr-2" />
//                         <span className="text-primary-foreground">
//                           Analyze Product
//                         </span>
//                       </>
//                     )}
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Analysis Result */}
//         {analysisResult && (
//           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
//             <AnalysisResult analysis={analysisResult} />
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

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
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Ingredient <span className="text-emerald-400">Insight</span>
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Our mission is to help you make informed choices about the
                products you consume by providing transparent ingredient
                analysis.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Features</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Ingredient Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Nutritional Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Allergen Detection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Dietary Compatibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-emerald-400">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Ingredient Insight Analyzer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
