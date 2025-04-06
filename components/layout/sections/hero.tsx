import React from "react";
import Image from "next/image";
import {
  ChevronDown,
  Phone,
  Star,
  ArrowRight,
  Search,
  Menu,
} from "lucide-react";
import dheemant from "../../../public/dheemant.png"
import aman from "../../../public/aman-war.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-green-50">
      {/* Background accent circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-green-100/50"></div>
      <div className="absolute top-1/4 -left-16 w-48 h-48 rounded-full bg-green-100/50"></div>
      <div className="absolute bottom-1/4 right-16 w-32 h-32 rounded-full bg-green-100/30"></div>

      {/* Navbar */}
      {/* <header className="relative z-20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between"> */}
      {/* Logo */}
      {/* <div className="flex items-center space-x-3">
              <div className="h-12 w-12 relative">
                <div className="absolute inset-0 bg-green-600 rounded-full opacity-20"></div>
                <div className="absolute inset-1 bg-green-600 rounded-full opacity-40"></div>
                <div className="absolute inset-2 bg-green-600 rounded-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
              <div> */}
      {/* <h1 className="text-xl font-bold tracking-tight">
                  <span className="text-gray-900">Poshan</span>
                  <span className="mx-1 text-gray-400">|</span>
                  <span className="text-green-600">पोषण</span>
                </h1>
                <p className="text-xs text-gray-500">Nutrition Intelligence</p>
              </div>
            </div> */}

      {/* Desktop Navigation */}
      {/* <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-green-600 font-medium border-b-2 border-green-600 pb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition duration-300"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition duration-300"
              >
                Contact
              </a>
            </nav> */}

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
              <button className="text-gray-600 hover:text-green-600 transition">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Content */}
      <main className="relative z-0 pt-8 pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Main Headline */}
              <div>
                <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
                  <span className="block text-green-600 mb-2">पोषण</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                    POSHAN
                  </span>
                </h2>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                  Decode nutrition labels, understand medical reports, and make
                  informed health decisions with AI-powered insights.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/food"
                  className="text-gray-600 hover:text-green-600 transition duration-300"
                >
                  <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 group">
                    Get started
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                </a>
                <a
                  href="/report"
                  className="text-gray-600 hover:text-green-600 transition duration-300"
                >
                  <button className="flex items-center justify-center bg-green-100 hover:bg-green-700 text-slate-900 font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 group">
                    Analyze a report
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                </a>
              </div>

              {/* Search Box */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search foods, medicines, or reports..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* User Review */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-gray-100 max-w-md hover:shadow-2xl transition-shadow relative">
                <div className="absolute -top-2 -right-2 bg-green-50 rounded-full px-3 py-1 text-xs font-medium text-green-600 border border-green-200">
                  Verified User
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-green-100">
                      <Image
                        src={aman}
                        alt="Aarushi profile picture"
                        width={90}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Aarushi</h4>
                    <div className="flex items-center gap-1 my-1">
                      <span className="text-green-600 font-bold">5.0</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">
                      "Useful tool in figuring out my daily nutritional needs.
                      It helped me make better food choices and understand
                      product labels."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Delhi, India • 2 weeks ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              {/* Feature Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                {/* Top Green Band */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 py-5 px-6">
                  <h3 className="text-white font-semibold text-lg">
                    Our Services
                  </h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4 p-6">
                  {/* Food Analysis */}
                  <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-green-100 group">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Analyse Food Product
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Decode nutrition labels for healthier choices
                    </p>
                  </div>

                  {/* Medical Report */}
                  <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-green-100 group">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Analyse Medical Report
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Understand lab results in plain language
                    </p>
                  </div>

                  {/* Medicine GPT */}
                  <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-green-100 group">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Medicine GPT
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Learn about medications and side effects
                    </p>
                  </div>

                  {/* MedBuddy */}
                  <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-green-100 group">
                    <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900">MedBuddy</h4>
                    <p className="text-gray-600 text-sm">
                      Get personalized health guidance
                    </p>
                  </div>
                </div>

                {/* Second Review */}
                <div className="px-6 pb-6">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-100">
                          <Image
                            src={dheemant}
                            alt="Dheemant profile picture"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Dheemant
                        </h4>
                        <div className="flex items-center gap-1 my-1">
                          <span className="text-green-600 font-bold">5.0</span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs italic">
                          "Helped me understand a report the doctors gave! Super
                          easy to use!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Banner Strip */}
      <div className="relative h-32 text-xl overflow-visible mt-8 mb-20">
        {/* Top Left to Bottom Right Rotated Banner */}
        <div className="absolute  w-[120%] bg-green-600 transform -rotate-6 py-4 -translate-y-10 -translate-x-10 shadow-lg">
          <div className="flex justify-center">
            <div className="animate-marquee whitespace-nowrap">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={`banner1-${i}`}
                    className="mx-4 text-white font-bold"
                  >
                    POSHAN | पोषण
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Left to Top Right Rotated Banner (Crossing) */}
        <div className="absolute w-[150%] bg-green-700 transform rotate-6 py-4 translate-y-10 -translate-x-10 shadow-lg">
          <div className="flex justify-center">
            <div className="animate-marquee whitespace-nowrap">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={`banner2-${i}`}
                    className="mx-4 text-white font-bold opacity-90"
                  >
                    POSHAN | पोषण
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-2">Discover Features</p>
          <div className="animate-bounce bg-white rounded-full h-10 w-10 flex items-center justify-center shadow-md border border-gray-200">
            <ChevronDown className="text-green-600" size={20} />
          </div>
        </div>
      </div> */}

      {/* Features Section */}
    </section>
  );
};

export default HeroSection;
