import Section from "@/components/ui/Section";

import BackgroundGlow from "./BackgroundGlow";
import BackgroundPortrait from "./BackgroundPortrait";
import HeroButtons from "./HeroButtons";
import HeroText from "./HeroText";
import ScrollIndicator from "./ScrollIndicator";

export default function OpeningScene() {
  return (
    <Section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        py-24
      "
    >
      {/* Background Effects */}
      <BackgroundGlow />
      <BackgroundPortrait />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        <HeroText />

        <HeroButtons />

        <ScrollIndicator />
      </div>
    </Section>
  );
}