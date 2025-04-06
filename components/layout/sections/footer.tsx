// import { Separator } from "@/components/ui/separator";
// import { ChevronsDownIcon } from "lucide-react";
// import Link from "next/link";

// export const FooterSection = () => {
//   return (
//     <footer id="footer" className="relative mt-20">
//       <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background to-transparent pointer-events-none" />

//       <div className="container py-24 sm:py-32 px-6 sm:px-12 lg:px-24 relative">
//         <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-xl shadow-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
//             {/* Logo Section */}
//             <div className="col-span-full xl:col-span-2 flex items-center">
//               <Link
//                 href="#"
//                 className="flex items-center font-bold text-2xl text-foreground hover:text-primary/90 transition-colors duration-300"
//               >
//                 {/* <ChevronsDownIcon className="w-9 h-9 mr-2" /> */}
//                 Poshan
//               </Link>
//             </div>

//             {/* Contact Links */}
//             <div className="flex flex-col gap-3">
//               <h3 className="font-bold text-lg text-foreground">Contact</h3>
//               <Link
//                 href="https://github.com/shantanukumar22"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 Github
//               </Link>
//               <Link
//                 href="https://twitter.com/your-twitter"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 Twitter
//               </Link>
//               <Link
//                 href="https://instagram.com/your-instagram"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 Instagram
//               </Link>
//             </div>

//             {/* Help Links */}
//             <div className="flex flex-col gap-3">
//               <h3 className="font-bold text-lg text-foreground"></h3>
//               <Link
//                 href="/termsandcondition"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 TERMS AND CONDITION
//               </Link>
//               <Link
//                 href="/contact-us"
//                 className="text-muted-foreground hover:text-primary transition-colors duration-300"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* About and Project Links */}
//             <div className="flex flex-col gap-3 xl:col-span-2">
//               <h3 className="font-bold text-lg text-foreground">
//                 About Poshan AI
//               </h3>
//               <p className="text-sm text-muted-foreground/90">
//                 Leveraging Generative AI for medical report and nutrition
//                 analysis.
//               </p>
//               <div className="flex flex-col gap-2">
//                 <Link
//                   href="/report"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Medical Report Analyzer
//                 </Link>
//                 <Link
//                   href="/searchmedicine"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Medicine Analyzer
//                 </Link>
//                 <Link
//                   href="/food"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Food Ingredient Analyzer
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// import { Separator } from "@/components/ui/separator";
// import { HeartPulseIcon, ExternalLinkIcon } from "lucide-react";
// import Link from "next/link";

// export const FooterSection = () => {
//   return (
//     <footer id="footer" className="relative mt-20">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent pointer-events-none" />

//       <div className="container py-24 sm:py-32 px-6 sm:px-12 lg:px-24 relative">
//         <div className="p-8 md:p-12 rounded-3xl border border-border/40 bg-card/30 backdrop-blur-xl shadow-2xl">
//           {/* Top section with logo and description */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pb-8 border-b border-border/20">
//             <Link
//               href="/"
//               className="flex items-center font-bold text-2xl text-foreground hover:text-primary transition-colors duration-300"
//             >
//               <HeartPulseIcon className="w-8 h-8 mr-2 text-primary" />
//               <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
//                 Poshan
//               </span>
//             </Link>

//             <p className="text-muted-foreground mt-4 md:mt-0 md:max-w-md">
//               Leveraging Generative AI for comprehensive medical report and
//               nutrition analysis to empower healthier living.
//             </p>
//           </div>

//           {/* Main grid section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-10">
//             {/* Services column */}
//             <div className="flex flex-col gap-4">
//               <h3 className="font-bold text-lg text-foreground pb-2 border-b border-border/20">
//                 Our Services
//               </h3>
//               <div className="flex flex-col gap-3">
//                 <Link
//                   href="/report"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                 >
//                   <span>Medical Report Analyzer</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//                 <Link
//                   href="/searchmedicine"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                 >
//                   <span>Medicine Analyzer</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//                 <Link
//                   href="/food"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                 >
//                   <span>Food Ingredient Analyzer</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//               </div>
//             </div>

//             {/* Connect column */}
//             <div className="flex flex-col gap-4">
//               <h3 className="font-bold text-lg text-foreground pb-2 border-b border-border/20">
//                 Connect
//               </h3>
//               <div className="flex flex-col gap-3">
//                 <Link
//                   href="https://github.com/shantanukumar22"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>Github</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//                 <Link
//                   href="https://twitter.com/your-twitter"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>Twitter</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//                 <Link
//                   href="https://instagram.com/your-instagram"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>Instagram</span>
//                   <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </Link>
//               </div>
//             </div>

//             {/* Legal column */}
//             <div className="flex flex-col gap-4">
//               <h3 className="font-bold text-lg text-foreground pb-2 border-b border-border/20">
//                 Legal
//               </h3>
//               <div className="flex flex-col gap-3">
//                 <Link
//                   href="/termsandcondition"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Terms & Conditions
//                 </Link>
//                 <Link
//                   href="/privacy"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </Link>
//                 <Link
//                   href="/contact-us"
//                   className="text-muted-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>

//             {/* Newsletter column */}
//             <div className="flex flex-col gap-4 lg:col-span-1">
//               <h3 className="font-bold text-lg text-foreground pb-2 border-b border-border/20">
//                 About Poshan AI
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 Poshan AI is dedicated to making healthcare information
//                 accessible and actionable through advanced AI analysis of
//                 medical reports and nutritional data.
//               </p>
//               <div className="mt-2">
//                 <span className="text-xs text-muted-foreground/70">
//                   © {new Date().getFullYear()} Poshan AI. All rights reserved.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import { Separator } from "@/components/ui/separator";
import {
  HeartPulseIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative mt-20 w-full bg-gradient-to-b from-background to-background/95"
    >
      {/* Top decorative wave */}
      <div className="w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-16 md:h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background/20"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto pt-12 pb-24 px-6 sm:px-8 lg:px-12">
          {/* Logo and mission section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 pb-12 border-b border-border/30">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="flex items-center font-bold text-3xl text-foreground hover:text-primary transition-colors duration-300"
              >
                <HeartPulseIcon className="w-10 h-10 mr-3 text-primary animate-pulse" />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Poshan
                </span>
              </Link>

              <h2 className="text-2xl font-bold text-foreground">
                Empowering Health Through AI
              </h2>

              <p className="text-muted-foreground text-lg max-w-xl">
                Poshan AI transforms complex medical reports and nutritional
                data into actionable insights, making healthcare information
                accessible and meaningful for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-md">
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <MailIcon className="w-5 h-5 mr-2 text-primary" />
                  Newsletter
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest health insights and features.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow bg-background/70 text-foreground px-4 py-2 rounded-l-md border border-border/40 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="bg-card/40 backdrop-blur-sm p-6 rounded-xl border border-border/30 shadow-md flex flex-col justify-between">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  Get in Touch
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <PhoneIcon className="w-4 h-4 mr-2 text-primary" />
                    <span>+91 9650289104</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MailIcon className="w-4 h-4 mr-2 text-primary" />
                    <span>Amangangwar0432@gmail.com</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <MapPinIcon className="w-4 h-4 mr-2 mt-1 text-primary" />
                    <span>Bennett universoity,Greater Noida India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main links section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            {/* Services column */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xl text-foreground mb-2 pb-3 border-b border-border/20 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                Our Services
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/report"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Medical Report Analyzer</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/searchmedicine"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Medicine Analyzer</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/food"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Food Ingredient Analyzer</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/nutrition"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Nutrition Planning</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/health-tracker"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Health Tracker</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Resources column */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xl text-foreground mb-2 pb-3 border-b border-border/20 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                Resources
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Health Blog</span>
                </Link>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>FAQs</span>
                </Link>
                <Link
                  href="/tutorials"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Tutorials</span>
                </Link>
                <Link
                  href="/research"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Research Papers</span>
                </Link>
              </div>
            </div>

            {/* Connect column */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xl text-foreground mb-2 pb-3 border-b border-border/20 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                Connect
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="https://github.com/shantanukumar22"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Github</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="https://twitter.com/your-twitter"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Twitter</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="https://instagram.com/your-instagram"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Instagram</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="https://linkedin.com/your-linkedin"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>LinkedIn</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="https://youtube.com/your-channel"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>YouTube</span>
                  <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Legal column */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-xl text-foreground mb-2 pb-3 border-b border-border/20 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                Legal
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  href="/termsandcondition"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Terms & Conditions</span>
                </Link>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Medical Disclaimer</span>
                </Link>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/sitemap"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  <ChevronRightIcon className="w-5 h-5 mr-2 text-primary" />
                  <span>Sitemap</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section with social icons and copyright */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                {/* Social icons */}
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
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
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <span className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Poshan AI. All rights reserved.
                </span>
                <span className="hidden sm:block text-muted-foreground/50">
                  |
                </span>
                <span className="text-sm text-muted-foreground">
                  Made with ❤️ by Team Poshan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
