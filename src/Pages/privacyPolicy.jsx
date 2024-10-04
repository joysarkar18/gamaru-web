import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For smooth animations

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPolicy = () => {
  return (
    <div
      name="privacy policy"
      className="min-h-screen bg-slate-900 p-8 flex flex-col items-center backdrop-blur-md"
    >
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Link to="/privacy-policy">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-2xl font-extrabold md:text-4xl pb-5 hover:scale-110 transition-transform duration-500">
            Privacy Policy
          </h1>
        </Link>
      </motion.div>

      <motion.div
        className="w-full md:w-2/4 p-5 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg md:p-8 rounded-lg shadow-xl transition-all duration-700 ease-in-out"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">
          GAMARU Privacy Policy
        </h1>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          GAMARU, the creator behind the innovative GAMARU application, proudly
          presents this app as a complimentary offering. This SERVICE is
          thoughtfully provided by GAMARU without any charges, and it is
          intended to be used in its current form. This page serves as an
          informative guide for visitors, outlining our policies regarding the
          collection, usage, and disclosure of Personal Information for those
          who choose to embrace our Service. By opting to utilize our Service,
          you signify your consent to the collection and utilization of
          information as outlined in this policy.
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          The Personal Information that we gather serves to enhance and optimize
          the Service. We want to assure you that your information will never be
          used or shared with anyone other than as described in this Privacy
          Policy. The terms mentioned herein hold the same meanings as in our
          Terms and Conditions, accessible at GAMARU, unless specified otherwise
          in this Privacy Policy.
        </p>

        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-all duration-300">
          Data Insights:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          It's important to note that every time you interact with our Service,
          any errors that occur prompt us to gather data and information (via
          third-party products) from your device. This information, referred to
          as Log Data, may encompass details such as your device's Internet
          Protocol (“IP”) address, device name, operating system version, app
          configuration when using our Service, timestamps, and other relevant
          statistics.
        </p>

        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-teal-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 transition-all duration-300">
          Your Privacy Matters:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          Cookies, those discreet files commonly used as anonymous unique
          identifiers, are not explicitly employed by our Service. However,
          there's a possibility that third-party code and libraries we use may
          utilize “cookies” to gather insights and enhance their services. You
          retain the power to accept or decline these cookies, with the option
          to be alerted when a cookie is being transmitted to your device. It's
          important to be aware that opting to decline our cookies may restrict
          access to certain features of our Service.
        </p>

        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-orange-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 transition-all duration-300">
          Collaboration for Enhancement:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          In our endeavor to provide a comprehensive experience, we might
          collaborate with third-party companies and individuals for purposes
          such as facilitating the Service, delivering the Service on our
          behalf, offering Service-related functionalities, and analyzing
          Service usage. It's noteworthy that these third parties may access
          your Personal Information strictly for the purpose of fulfilling
          assigned tasks. They are, however, bound by contractual obligations to
          ensure the non-disclosure and limited use of this information.
        </p>

        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 transition-all duration-300">
          Prioritizing Security:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          We place immense value on the trust you bestow upon us by sharing your
          Personal Information. Therefore, we are committed to employing
          commercially acceptable measures to safeguard it. However, it's
          important to recognize that no method of transmitting data over the
          internet or electronic storage can be guaranteed as 100% secure and
          reliable.
        </p>
        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 transition-all duration-300">
          Exploring External Links:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          Within our Service, you may come across links to external websites. We
          urge you to exercise caution and review the Privacy Policy of these
          external sites, as they operate independently and are beyond our
          jurisdiction. We bear no responsibility for the content, privacy
          policies, or actions of these third-party sites or services.
        </p>
        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-teal-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 transition-all duration-300">
          Caring for Young Users:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          Our Services are not intended for individuals under the age of 13. We
          do not knowingly collect personally identifiable information from
          children under the age of 13. If it comes to our attention that a
          child under 13 has provided us with personal information, we will take
          immediate steps to delete such data from our records. Parents or
          guardians who believe their child may have shared personal information
          can contact us for appropriate resolution.
        </p>
        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-orange-500 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 transition-all duration-300">
          Evolving Privacy Policy:
        </h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          We reserve the right to update our Privacy Policy periodically.
          Therefore, you are advised to review this page from time to time for
          any changes. Any modifications will be communicated by posting the
          revised Privacy Policy on this page. These changes will take effect
          immediately upon posting.
        </p>
        <div className="border-b-2 border-transparent mb-6 relative">
          <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-pink-400 animate-pulse"></div>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 transition-all duration-300">
          Connect with Us:
        </h2>
        <p className="mb-0 text-gray-800 dark:text-gray-300">
          Should you have any queries or suggestions regarding our Privacy
          Policy, please don't hesitate to get in touch with us at
          privacy@gamaru.com.
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
