"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import MedicineInfo from "@/components/MedicineInfo";
import ChatInterface from "@/components/ChatInterface";
import { Search, Clock, PillIcon, MessageCircle } from "lucide-react";

interface Medicine {
  id: string;
  name: string;
  genericName?: string;
  description: string;
  indications: string;
  warnings: string;
  dosage: string;
}

const MAX_RECENT_SEARCHES = 5;

export default function Home() {
  const [query, setQuery] = useState("");
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(
    null
  );
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("recentMedicineSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const addToRecentSearches = (search: string) => {
    const updated = [
      search,
      ...recentSearches.filter((s) => s !== search),
    ].slice(0, MAX_RECENT_SEARCHES);
    setRecentSearches(updated);
    localStorage.setItem("recentMedicineSearches", JSON.stringify(updated));
  };

  const searchMedicines = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setError("");
    try {
      const res = await fetch(
        `/api/medicine?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();

      if (res.ok) {
        setMedicines(data);
        addToRecentSearches(searchQuery);
      } else {
        throw new Error(data.error || "Error searching for medicines");
      }
    } catch (err) {
      console.error("Error searching medicines:", err);
      setError(
        err instanceof Error ? err.message : "Error searching for medicines"
      );
      setMedicines([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim()) {
      searchMedicines(query);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <PillIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-sm font-semibold tracking-widest text-green-600 dark:text-green-400 uppercase mb-2">
            YOUR MEDICAL ASSISTANT
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 to-green-700 bg-clip-text text-transparent dark:from-blue-500 dark:to-indigo-400 mb-4">
            Medicine Search & Chat
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Find detailed information about medications and get instant answers
            from our medical assistant.
          </p>
        </div>

        {/* Search Card */}
        <Card className="mb-8 overflow-hidden border-none shadow-lg">
          <div className="bg-gradient-to-r text-green-600 dark:text-green-400 p-1">
            <CardHeader className="bg-white dark:bg-slate-800 pt-5">
              <CardTitle className="text-xl flex items-center gap-2">
                <Search className="h-5 w-5 text-green-600 dark:text-green-400" />
                Find Your Medication
              </CardTitle>
              <CardDescription>
                Search by brand name or generic name
              </CardDescription>
            </CardHeader>
          </div>
          <CardContent className="bg-white dark:bg-slate-800 p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter medicine name..."
                  className="border-slate-300 text-green-600 dark:text-green-400 dark:border-slate-700 h-12 text-lg"
                />
              </div>
              <Button
                onClick={() => searchMedicines(query)}
                disabled={isSearching || !query.trim()}
                className=" text-green-600 dark:text-green-400h-12 px-6 font-medium"
              >
                {isSearching ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                    Searching...
                  </div>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-md border border-red-200 flex items-center">
                <div className="mr-3">⚠️</div>
                <p className="font-medium">{error}</p>
              </div>
            )}

            {recentSearches.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center gap-2 text-slate-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <p className="text-sm font-medium">Recent searches</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery(search);
                        searchMedicines(search);
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Search Results */}
          <Card className="border-none shadow-lg h-[500px] flex flex-col">
            <div className="bg-gradient-to-r text-green-600 dark:text-green-400 p-1">
              <CardHeader className="bg-white dark:bg-slate-800 pt-5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <PillIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Search Results
                </CardTitle>
                <CardDescription>
                  {medicines.length} medication
                  {medicines.length !== 1 ? "s" : ""} found
                </CardDescription>
              </CardHeader>
            </div>
            <CardContent className="flex-1 overflow-y-auto bg-white dark:bg-slate-800 p-6">
              {medicines.length > 0 ? (
                <ul className="space-y-2 divide-y divide-slate-200 dark:divide-slate-700">
                  {medicines.map((medicine, index) => (
                    <li
                      key={medicine.id || index}
                      className={`cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-3 rounded-lg transition-all ${
                        selectedMedicine?.id === medicine.id
                          ? "bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedMedicine(medicine)}
                    >
                      <div className="font-medium text-lg">{medicine.name}</div>
                      {medicine.genericName && (
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          Generic: {medicine.genericName}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-full mb-4">
                    <Search className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    No medicines found
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
                    Try searching for a different medicine
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Medicine Info and Chat */}
          <Card className="border-none shadow-lg h-[500px] flex flex-col">
            <div className="bg-gradient-to-r text-green-600 dark:text-green-400 p-1">
              <CardHeader className="bg-white dark:bg-slate-800 pt-5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Medicine Information
                </CardTitle>
                <CardDescription>
                  {selectedMedicine
                    ? selectedMedicine.name
                    : "Select a medicine to view details"}
                </CardDescription>
              </CardHeader>
            </div>
            <CardContent className="flex-1 overflow-y-auto bg-white dark:bg-slate-800 p-6">
              {selectedMedicine ? (
                <>
                  <MedicineInfo medicine={selectedMedicine} />
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <ChatInterface medicine={selectedMedicine} />
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-full mb-4">
                    <PillIcon className="h-6 w-6 text-slate-400" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    No medicine selected
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
                    Select a medicine from the search results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
