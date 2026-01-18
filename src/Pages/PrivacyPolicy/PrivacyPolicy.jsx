import PageHero from "../../components/helpingComp/PageHero";

export default function PrivacyPolicy() {
    // page hero
  const breadcrumbs = [
    { label: "হোম", href: "/" },
    { label: "Privacy Policy" }, 
  ]
  return (
    <main className=" ">
        <PageHero title={"Privacy Policy"} breadcrumbs={breadcrumbs}/>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-5 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Privacy Policy</h1>
        {/* <button
          className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
          aria-label="Switch to Bengali language"
        >
          বাংলা
        </button> */}
      </div>

      <p className="text-sm text-gray-500 mb-8">Last updated: July 19, 2025</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy describes how BMS Tech Logistics Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          collects, uses, and discloses your information in connection with your use of the Tramessy software and
          related services (collectively, the &quot;Service&quot;). We are committed to protecting your privacy and
          handling your data in an open and transparent manner.
        </p>
        <p>
          By using the Tramessy Service, you agree to the collection and use of information in accordance with this
          policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Information We Collect</h2>
        <p className="mb-4">We collect various types of information to provide and improve our Service to you:</p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Data:</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Account Information:</strong> When you register for Tramessy, we collect your name, email address,
            phone number, company name, and billing information.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you access and use the Service, such as IP address,
            browser type, operating system, pages visited, time spent on pages, and other diagnostic data.
          </li>
          <li>
            <strong>Vehicle and Driver Data:</strong> Information related to your transport operations, including
            vehicle details (e.g., license plate, type), driver information (e.g., name, contact), route data, and
            invoicing details.
          </li>
          <li>
            <strong>Communication Data:</strong> Records of your communications with us, including customer support
            inquiries.
          </li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Non-Personal Data:</h3>
        <p>
          We may also collect non-personal information such as aggregated statistical data or anonymized data that does
          not directly identify you.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">How We Use Your Information</h2>
        <p className="mb-4">BMS Tech Logistics Ltd. uses the collected data for various purposes:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>To provide and maintain the Tramessy Service.</li>
          <li>To notify you about changes to our Service.</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our Service.</li>
          <li>To monitor the usage of our Service.</li>
          <li>To detect, prevent and address technical issues.</li>
          <li>To manage your subscription and process payments.</li>
          <li>To send you marketing and promotional communications, where you have opted in.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">How We Share Your Information</h2>
        <p className="mb-4">We may share your information in the following situations:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate
            our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing
            how our Service is used (e.g., payment processors, cloud hosting providers).
          </li>
          <li>
            <strong>For Business Transfers:</strong> If BMS Tech Logistics Ltd. is involved in a merger, acquisition, or
            asset sale, your Personal Data may be transferred.
          </li>
          <li>
            <strong>For Legal Requirements:</strong> We may disclose your Personal Data in the good faith belief that
            such action is necessary to:
            <ul className="list-circle list-inside ml-8 mt-2">
              <li>Comply with a legal obligation.</li>
              <li>Protect and defend the rights or property of BMS Tech Logistics Ltd.</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
              <li>Protect the personal safety of users of the Service or the public.</li>
              <li>Protect against legal liability.</li>
            </ul>
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
            your consent.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Data Security</h2>
        <p>
          The security of your data is important to us. We implement a variety of security measures to maintain the
          safety of your personal information when you enter, submit, or access your personal information. However, no
          method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to
          use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Your Data Protection Rights</h2>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>The right to access, update or delete the information we have on you.</li>
          <li>The right to rectify your information if it is inaccurate or incomplete.</li>
          <li>The right to object to our processing of your Personal Data.</li>
          <li>The right to request that we restrict the processing of your personal information.</li>
          <li>The right to data portability.</li>
          <li>
            The right to withdraw consent at any time where BMS Tech Logistics Ltd. relied on your consent to process
            your personal information.
          </li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details below.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to
          the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc list-inside ml-4">
          <li>By email: support@tramessy.com</li>
          {/* <li>By visiting this page on our website: [Your Contact Page URL]</li> */}
        </ul>
      </section>
      </div>
    </main>
  )
}
