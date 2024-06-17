import { Dot } from "../../assets/icons";
import { LandingNav } from "./landing-nav";

export const LandingHero = () => {
  return (
    <section className="bg-textmi-dark text-white py-6 px-[100px] min-h-screen">
      <LandingNav />
      <div className="flex flex-col w-full max-w-fit items-start p-[100px]">
        <h1 className="text-[87px]">Instant Conversations</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">Instant Connections</span>
          <span>
            <Dot />
          </span>
          <span className="text-2xl">Connect Effortlessly</span>
        </div>
      </div>
    </section>
  );
};


