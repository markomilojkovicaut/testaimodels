import GTMHero from "../components/gtm/GTMHero";
import GTMPipeline from "../components/gtm/GTMPipeline";
import GTMSkillGrid from "../components/gtm/GTMSkillGrid";
import GTMHowItWorks from "../components/gtm/GTMHowItWorks";
import GTMCta from "../components/gtm/GTMCta";

export default function GTMEnginePage() {
  return (
    <main>
      <GTMHero />
      <GTMPipeline />
      <GTMSkillGrid />
      <GTMHowItWorks />
      <GTMCta />
    </main>
  );
}
