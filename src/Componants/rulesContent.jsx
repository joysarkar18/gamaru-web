import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const RulesComponent = () => {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Game Rules
      </h1>
      <ol className="space-y-6">
        {rulesData.map((rule, index) => (
          <motion.li
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeInOut",
            }}
          >
            <strong className="text-lg md:text-xl text-white">
              {rule.title}
            </strong>
            <ul className="mt-2 list-disc list-inside">
              {rule.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-gray-300 mt-3">
                  <FaCheckCircle
                    className="text-green-500 mr-3"
                    style={{ fontSize: "1.25rem" }}
                  />
                  <span className="text-sm md:text-base">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

const rulesData = [
  {
    title: "Account Eligibility:",
    details: [
      "New BGMI accounts are not allowed.",
      "Accounts with less than 50 matches played in every season and with a level below 40 cannot participate.",
    ],
  },
  {
    title: "Headshot Percentage Limit:",
    details: [
      "Headshot percentage should not exceed 28%.",
      "Participants surpassing this limit will be kicked from the room with no refund.",
    ],
  },
  {
    title: "Timely Participation:",
    details: [
      "Participants must join the room before the 2 minutes of starting time.",
      "Failure to do so absolves responsibility for any joining issues.",
      "Refunds won't be processed for failure to join on time.",
    ],
  },
  {
    title: "Room ID and Password Sharing:",
    details: [
      "Do not share room ID and password with non-participants.",
      "Unauthorized sharing can lead to permanent ban from the platform and loss of winnings.",
    ],
  },
  {
    title: "Fair Play:",
    details: [
      "Griefing and teaming up are against game rules.",
      "Violators will be disqualified and lose their prizes.",
      "Any team found engaging in hacking or any form of cheating will face a permanent ban from the platform, as well as forfeiture of their winnings.",
    ],
  },
  {
    title: "Room ID and Password Timing:",
    details: [
      "Room ID and password will be provided in the app 10-12 minutes before the match start time.",
      "Match begins 10 minutes after sharing the details.",
      "Participants must ensure they have the details before the match starts.",
    ],
  },
  {
    title: "Paid Match:",
    details: [
      "The match is a paid event; entry fee is required to participate.",
      "Only 100 spots available; join before all spots are filled.",
      "Entry fee is per individual; each squad/duo member pays individually.",
    ],
  },
  {
    title: "Stable Position:",
    details: [
      "Once joined, refrain from changing positions in the room.",
      "Frequent position changes could result in being kicked from the room.",
    ],
  },
  {
    title: "First Come First Serve:",
    details: ["Spots are allocated on a first-come-first-served basis."],
  },
  {
    title: "Victory and Rewards:",
    details: [
      "Last standing participant receives the Chicken Dinner Award.",
      "Rewards are given for each kill; refer to the provided details for rewards.",
    ],
  },
  {
    title: "Device and Fair Play:",
    details: [
      "Only mobile devices are allowed; hacks and emulators are prohibited.",
    ],
  },
  {
    title: "Rule Violation Consequences:",
    details: [
      "Violating rules leads to swift action, including account bans and reward loss.",
    ],
  },
];

export default RulesComponent;
