import React from "react";
import RulesComponent from "../Componants/rulesContent";

const TermConditions = () => {
  return (
    <div name="terms & conditions" className="h-full bg-slate-800 flex flex-col items-center  pt-10">
      <h1 className="text-gray-200 text-2xl font-extrabold md:text-4xl">
        Terms and Conditions
      </h1>

      <RulesComponent></RulesComponent>
    </div>
  );
};

export default TermConditions;
