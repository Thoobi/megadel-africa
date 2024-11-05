// import "./globals.css";

import Header from "../components/header";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import CardPlan from "../components/cardPlan";
import OperateSection from "../components/operateSection";
import EarlyStage from "../components/EarlyStageSection";
import GrowingBusiness from "../components/growingBusinessSection";
import GetAndBenefits from "../components/getAndBenefitSection";
import Steps from "../components/stepsSection";
import CommunitySection from "../components/communitySection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <OperateSection />

        <EarlyStage />

        <GrowingBusiness />

        <GetAndBenefits />

        <Steps />

        {/* <TrainingSection /> */}

        <CardPlan />

        <CommunitySection />

        <Subscribe />
      </main>

      <Footer />
    </>
  );
}
