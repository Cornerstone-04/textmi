import { LandingHero } from "./landing-hero";
import { LandingStory } from "./landing-story";

export const Landing = () => {
  return (
    <main className="w-full min-h-screen">
      <LandingHero />
      <LandingStory />
    </main>
  );
};
