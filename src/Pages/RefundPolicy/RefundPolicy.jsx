import PageHero from "../../components/helpingComp/PageHero";

export default function RefundsPolicy() {
    // page hero
  const breadcrumbs = [
    { label: "হোম", href: "/" },
    { label: "Refunds Policy" }, 
  ]
  return (
    <main className=" ">
        <PageHero title={"Refunds Policy"} breadcrumbs={breadcrumbs}/>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-5 ">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Refunds Policy</h1>
        {/* <button
          className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
          aria-label="Switch to Bengali language"
        >
          বাংলা
        </button> */}
      </div>

      <p className="text-sm text-gray-500 mb-8">Last updated: July 19, 2025</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Overview</h2>
        <p className="mb-4">
          At BMS Tech Logistics Ltd., we strive to ensure your satisfaction with the Tramessy software. This Refunds
          Policy outlines the conditions under which refunds may be issued for our subscription-based services and
          custom feature development.
        </p>
        <p>
          Please read this policy carefully before making a purchase. By subscribing to or purchasing services from
          Tramessy, you agree to the terms of this Refunds Policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Subscription Refunds</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Monthly Subscriptions:</h3>
        <p className="mb-4">
          For monthly subscriptions to Tramessy, we offer a 7-day money-back guarantee from the date of your initial
          subscription. If you are not satisfied with the service within this period, you may request a full refund.
          After the 7-day period, monthly subscriptions are non-refundable.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Annual Subscriptions:</h3>
        <p className="mb-4">
          For annual subscriptions, we offer a 30-day money-back guarantee from the date of your initial subscription.
          If you are not satisfied within this period, you may request a full refund. After 30 days, annual
          subscriptions are non-refundable. In exceptional cases, a pro-rata refund may be considered for the unused
          portion of an annual subscription if the service becomes unusable due to a fault on our part that cannot be
          resolved.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Custom Feature Development & Software Integration</h2>
        <p className="mb-4">
          Refunds for custom feature development, software integration (payment, SMS, GPS, API), mobile apps, and web
          portal services are handled on a case-by-case basis.
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>
            <strong>Project Cancellation:</strong> If a custom development project is canceled by the client after work
            has commenced, any payments made for work completed up to the point of cancellation are non-refundable. A
            refund for the uncompleted portion may be issued at our discretion, based on the terms outlined in the
            specific project agreement.
          </li>
          <li>
            <strong>Dissatisfaction:</strong> If you are dissatisfied with a custom feature or integration, we will work
            with you to resolve the issues. Refunds will only be considered if we are unable to deliver the agreed-upon
            functionality as per the project scope and specifications.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Non-Refundable Situations</h2>
        <p className="mb-4">Refunds will generally not be issued in the following circumstances:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>If you simply change your mind after the initial guarantee period.</li>
          <li>If you have violated our Terms of Service.</li>
          <li>
            For any third-party services or integrations purchased through Tramessy but provided by external vendors.
          </li>
          <li>For issues arising from your own technical environment or misuse of the software.</li>
          <li>For any free trials or promotional offers.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">How to Request a Refund</h2>
        <p className="mb-4">
          To request a refund, please contact our customer support team at support@tramessy.com within the eligible
          refund period. Please include your account details, subscription information, and the reason for your refund
          request.
        </p>
        <p>
          Our team will review your request and process it within 7-10 business days if it meets the criteria outlined
          in this policy. Refunds will be issued to the original payment method used for the purchase.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          BMS Tech Logistics Ltd. reserves the right to modify this Refunds Policy at any time. Any changes will be
          effective immediately upon posting the updated policy on our website. Your continued use of the Service after
          any such changes constitutes your acceptance of the new Refunds Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Contact Us</h2>
        <p className="mb-4">If you have any questions about our Refunds Policy, please contact us:</p>
        <ul className="list-disc list-inside ml-4">
          <li>By email: support@tramessy.com</li>
          {/* <li>By visiting this page on our website: [Your Contact Page URL]</li> */}
        </ul>
      </section>
      </div>
    </main>
  )
}

