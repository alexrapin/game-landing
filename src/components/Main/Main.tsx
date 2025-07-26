import type React from "react";
import './Main.scss';
import { AdvantagesSection } from "../AdvantagesSection/AdvantagesSection";
import { WithoutLimitsSection } from "../WithoutLimitsSection/WithoutLimitsSection";
import { TheBestSection } from "../TheBestSection/TheBestSection";
import { OtherDataNetworks } from "../OtherDataNetworks/OtherDataNetworks";
import { TraditionalSolutions } from "../TraditionalSolutions/TraditionalSolutions";

export const Main: React.FC = () => {
  return (
    <main>
      <OtherDataNetworks />
      <TraditionalSolutions />
      <AdvantagesSection />
      <WithoutLimitsSection />
      <TheBestSection />
    </main>
  );
};
