import React from "react";
import GlossyContainer from "../Componants/glossy";
import Cardx from "../Componants/featuresCard";
import Footer from "./footer";

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center py-12 px-6 md:px-12">
      <h1 className="text-gray-200 text-3xl md:text-5xl font-extrabold pb-8 uppercase tracking-wide">
        Features
      </h1>

      <GlossyContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
          <Cardx
            logo={
              <img
                src="/assets/gPay.webp"
                alt="Instant Withdraw"
                className="w-20 h-20 object-contain"
              />
            }
            heading="Instant Withdraw"
            details="Get instant withdraws to your UPI Id."
          />

          <Cardx
            logo={
              <img
                src="/assets/coins.png"
                alt="Prizes per Kill Event"
                className="w-20 h-20 object-contain"
              />
            }
            heading="Prizes per Kill Event"
            details="Earn prizes not just for winning, but also for kills."
          />

          <Cardx
            logo={
              <img
                src="/assets/banPan.png"
                alt="BanPan for Hackers"
                className="w-20 h-20 object-contain"
              />
            }
            heading="BanPan for Hackers"
            details="Advanced security to prevent hackers."
          />
        </div>

        <div className="md:h-16 h-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
          <Cardx
            logo={
              <img
                src="/assets/reee.png"
                alt="Refer Friends & Earn"
                className="w-20 h-20 object-contain"
              />
            }
            heading="Refer Friends & Earn"
            details="Refer your friends and earn additional rewards."
          />

          <Cardx
            logo={
              <img
                src="/assets/liveStram.png"
                alt="Live Stream of Event"
                className="w-20 h-20 object-contain"
              />
            }
            heading="Live Stream of Event"
            details="Watch live streams of ongoing events."
          />

          <Cardx
            logo={
              <img
                src="/assets/customer.png"
                alt="24x7 Customer Support"
                className="w-20 h-20 object-contain"
              />
            }
            heading="24x7 Customer Support"
            details="We're here to help you anytime, anywhere."
          />
        </div>
      </GlossyContainer>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Features;
