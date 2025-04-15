import HeroSection from "@/components/layout/sections/hero";
import FeaturesSection from "@/components/layout/sections/features";
import FooterSection from "@/components/layout/sections/footer";

export const metadata = {
  title: "Poshan - Your Personal Healthcare Companion",
  description: "Access reliable medical assistance, analyze reports, and get nutrition insights - all in one place. Designed especially for rural communities.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}
