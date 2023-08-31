import React from "react";
import GlossyContainer from "../Componants/glossy";
import Cardx from "../Componants/featuresCard";
import Footer from "./footer";

const Features = () => {
  return (
    <div className="bg-slate-800 h-screen flex flex-col items-center">
      <h1 className="text-gray-200 text-3xl md:text-5xl font-extrabold pb-5 pt-5">
        Features
      </h1>
      <GlossyContainer>
        <div className="columns-1 md:columns-3 gap-44">
          <Cardx
            logo={
              <img src="src/assets/gPay.webp" alt="Logo" className="logo-img" />
            }
            heading="Instant Withdraw"
            details="Get instant withdraw to your UPI Id."
          />
          <div className="md:h-0 h-10"></div>
            
          <Cardx
            logo={
              <img src="src/assets/coins.png" alt="Logo" className="logo-img" />
            }
            heading="Prizes per Kill Event"
            details="Get prizes not only for winning also for kills."
          />
          <div className="md:h-0 h-10"></div>

          <Cardx
            logo={
              <img
                src="src/assets/banPan.png"
                alt="Logo"
                className="logo-img"
              />
            }
            heading="BanPan for Hackers"
            details="No Hackers allowed banpan securety."
          />
        </div>
        <div className="md:h-20 h-10"></div>

        <div className="columns-1 md:columns-3 gap-32">
          <Cardx
            logo={
              <img src="src/assets/reee.png" alt="Logo" className="logo-img" />
            }
            heading="Refer Friends & Earn"
            details="Additional details about the card."
          />
          <div className="md:h-0 h-10"></div>

          <Cardx
            logo={
              <img src="src/assets/liveStram.png" alt="Logo" className="logo-img" />
            }
            heading="Live Stream of Evevnt"
            details="Additional details about the card."
          />
          <div className="md:h-0 h-10"></div>

          <Cardx
            logo={
              <img
                src="src/assets/customer.png"
                alt="Logo"
                className="logo-img"
              />
            }
            heading="24x7 Customer Support"
            details="Additional details about the card."
          />
        </div>
      </GlossyContainer>

      <Footer></Footer>
    </div>
  );
};

export default Features;
