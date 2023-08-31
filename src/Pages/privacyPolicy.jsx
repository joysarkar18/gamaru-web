// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-800 p-8 flex flex-col items-center">
         <h1 className="text-gray-200 text-2xl font-extrabold md:text-4xl pb-5">
        Privacy Policy
      </h1>
      <div className=" w-screen md:w-2/4 p-5 md:mx-auto bg-gray-300 md:p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">GAMARU Privacy Policy</h1>
        <p className="mb-4">
          GAMARU, the creator behind the innovative GAMARU application, proudly presents this app as a complimentary offering. This SERVICE is thoughtfully provided by GAMARU without any charges, and it is intended to be used in its current form. This page serves as an informative guide for visitors, outlining our policies regarding the collection, usage, and disclosure of Personal Information for those who choose to embrace our Service. By opting to utilize our Service, you signify your consent to the collection and utilization of information as outlined in this policy.
        </p>
        <p className="mb-4">
          The Personal Information that we gather serves to enhance and optimize the Service. We want to assure you that your information will never be used or shared with anyone other than as described in this Privacy Policy. The terms mentioned herein hold the same meanings as in our Terms and Conditions, accessible at GAMARU, unless specified otherwise in this Privacy Policy.
        </p>
        {/* ... (continue adding paragraphs and sections) */}
        <h2 className="text-xl font-semibold mb-2">Data Insights:</h2>
        <p className="mb-4">
          It's important to note that every time you interact with our Service, any errors that occur prompt us to gather data and information (via third-party products) from your device. This information, referred to as Log Data, may encompass details such as your device's Internet Protocol (“IP”) address, device name, operating system version, app configuration when using our Service, timestamps, and other relevant statistics.
        </p>
        <h2 className="text-xl font-semibold mb-2">Your Privacy Matters:</h2>
        <p className="mb-4">
          Cookies, those discreet files commonly used as anonymous unique identifiers, are not explicitly employed by our Service. However, there's a possibility that third-party code and libraries we use may utilize “cookies” to gather insights and enhance their services. You retain the power to accept or decline these cookies, with the option to be alerted when a cookie is being transmitted to your device. It's important to be aware that opting to decline our cookies may restrict access to certain features of our Service.
        </p>
        {/* ... (continue adding paragraphs and sections) */}
        <h2 className="text-xl font-semibold mb-2">Collaboration for Enhancement:</h2>
        <p className="mb-4">
          In our endeavor to provide a comprehensive experience, we might collaborate with third-party companies and individuals for purposes such as facilitating the Service, delivering the Service on our behalf, offering Service-related functionalities, and analyzing Service usage. It's noteworthy that these third parties may access your Personal Information strictly for the purpose of fulfilling assigned tasks. They are, however, bound by contractual obligations to ensure the non-disclosure and limited use of this information.
        </p>
        {/* ... (continue adding paragraphs and sections) */}
        <h2 className="text-xl font-semibold mb-2">Prioritizing Security:</h2>
        <p className="mb-4">
          We place immense value on the trust you bestow upon us by sharing your Personal Information. Therefore, we are committed to employing commercially acceptable measures to safeguard it. However, it's important to recognize that no method of transmitting data over the internet or electronic storage can be guaranteed as 100% secure and reliable.
        </p>
        <h2 className="text-xl font-semibold mb-2">Exploring External Links:</h2>
        <p className="mb-4">
          Within our Service, you may come across links to external websites. We urge you to exercise caution and review the Privacy Policy of these external sites, as they operate independently and are beyond our jurisdiction. We bear no responsibility for the content, privacy policies, or actions of these third-party sites or services.
        </p>
        <h2 className="text-xl font-semibold mb-2">Caring for Young Users:</h2>
        <p className="mb-4">
          Our Services are not intended for individuals under the age of 13. We do not knowingly collect personally identifiable information from children under the age of 13. If it comes to our attention that a child under 13 has provided us with personal information, we will take immediate steps to delete such data from our records. Parents or guardians who believe their child may have shared personal information can contact us for appropriate resolution.
        </p>
        <h2 className="text-xl font-semibold mb-2">Evolving Privacy Policy:</h2>
        <p className="mb-4">
          This Privacy Policy may be subject to updates from time to time. It is advisable to revisit this page periodically for any changes. Notification of changes will be provided by posting the updated Privacy Policy on this page. The updated policy takes immediate effect upon being posted.
        </p>
        <h2 className="text-xl font-semibold mb-2">Connect with Us:</h2>
        <p className="mb-0">
          Should you have any queries or suggestions regarding our Privacy Policy, please don't hesitate to get in touch with us. Your concerns matter, and we are here to address them.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
