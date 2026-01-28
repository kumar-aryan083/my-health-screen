import ClinicianCTA from "@/components/home/ClinicianCTA";
import HeroTrust from "@/components/home/HeroTrust";
import HowItWorks from "@/components/home/HowItWorks";
import PopularChecks from "@/components/home/PopularChecks";
import ReassuranceBlock from "@/components/home/ReassuranceBlock";
import TrustStrip from "@/components/home/TrustStrip";

export default function Home() {
  return (
    <main>
      <HeroTrust />
      <PopularChecks />
      <ReassuranceBlock />
      <TrustStrip />
      <HowItWorks />
      <ClinicianCTA />
    </main>
  );
}
