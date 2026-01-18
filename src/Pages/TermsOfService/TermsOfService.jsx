import PageHero from "../../components/helpingComp/PageHero"

export default function TermsOfService() {
     // page hero
  const breadcrumbs = [
    { label: "হোম", href: "/" },
    { label: "Terms Of Service" }, 
  ]
  return (
    <main className=" ">
        <PageHero title={"Terms Of Service"} breadcrumbs={breadcrumbs}/>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-5 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Terms & Conditions</h1>
        {/* <button
          className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
          aria-label="Switch to Bengali language"
        >
          বাংলা
        </button> */}
      </div>

      <p className="text-sm text-gray-500 mb-8">Last updated: August 14, 2024</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">OVERVIEW</h2>
        <p className="mb-4">
          This website is operated by BMS Tech Logistics Ltd. (registered name of our company). The terms
          &quot;We&quot;, &quot;Us&quot; and &quot;Our&quot; are used to refer to BMS Tech Logistics Ltd. Tramessy
          offers all information, tools, and services concerning Tramessy&apos;s business, and are publicly available on
          the website. The user shall be deemed to have accepted all the terms, conditions, policies, and notices
          officially stated, as they continue to use the website and its services.
        </p>
        <p className="mb-4">
          By visiting our website and/or purchasing something from us, you become a user of the website and engage in
          our &quot;Services&quot;. Such engagement will consecutively mean the user agreeing to be bound by the
          following terms and conditions (also referred to as &quot;Terms of Service&quot;, &quot;Terms of use&quot; or
          &quot;Terms&quot;), including those additional terms &amp; conditions and policies referenced herein and/or
          available by hyperlink. These Terms of Service apply to all users of the website including, but not limited
          to, users who are browsers, vendors, customers, merchants, affiliates, and/or contributors of content.
        </p>
        <p className="mb-4">
          Please read this Terms of Service carefully before accessing or using our website or our services. By
          accessing or using any part of the website, you agree to be legally bound by these Terms of Service. If you do
          not agree to all the Terms of this agreement, then you may not access the website or use any of the services.
        </p>
        <p>
          Any new addition of features, services, or tools shall also be deemed to be subject to the Terms of Service in
          force. You can review the most current version of the Terms of Service at any time on this page. We reserve
          the right to update, change, or replace any part of these Terms &amp; Conditions by posting updates and/or
          changes to our website. Therefore, to stay updated on the Terms, please check this page periodically for
          changes. Your continued use of, or access to the website, following the posting of any changes constitutes
          acceptance of those changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">GENERAL CONDITIONS</h2>
        <p className="mb-4">
          By agreeing to these Terms of Service, you represent that you are at the age of majority in your present State
          or Province of residence, or that you have given us your consent to allow any of your minor dependents to use
          this website where you are the age of majority in your State or Province of residence.
        </p>
        <p className="mb-4">
          You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,
          violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any
          worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in
          an immediate termination of your Services.
        </p>
        <p className="mb-4">
          We reserve the right to refuse service to anyone for any reason at any time. You understand that your content
          (not including credit card information), may be transferred unencrypted and may involve the following:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Transmissions over various networks; and</li>
          <li>Changes to conform and adapt to technical requirements of connecting networks or devices.</li>
        </ul>
        <p>
          You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the
          Service, or access to the Service on the website through which the service is provided, without express
          written permission by us.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">AVAILABILITY, PRICING AND PAYMENT METHODS</h2>
        <p className="mb-4">
          All products and services offered are subject to availability and we reserve the right to limit quantities.
          Prices for our products are subject to change without notice. We strive to provide accurate descriptions and
          pricing for our products; however, errors may occur. In the event of a discrepancy between the actual price
          and the price listed on our website, we reserve the right to refuse or cancel any orders placed at the
          incorrect price.
        </p>
        <p className="mb-4">
          Payments for products and services can be made through various methods including credit/debit cards and other
          payment methods as indicated on our website. By providing payment information, you authorize us to charge the
          payment method you have chosen for the total amount of your purchase.
        </p>
        <p>
          If we encounter any issues processing your payment, we will notify you and provide options to resolve the
          issue.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-870 mb-4">PRODUCTS</h2>
        <p className="mb-4">
          We strive to display the most accurate images and descriptions of our products on our website. However, we
          cannot guarantee that the color or detail of the product will be accurately represented on your device.
          Products are subject to availability and may be discontinued or modified without notice.
        </p>
        <p>
          If a product you ordered is not available or has been discontinued, we will contact you to provide alternative
          options or issue a refund.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">LIMITATION OF LIABILITY</h2>
        <p>
          To the fullest extent permitted by law, BMS Tech Logistics Ltd. and its affiliates shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits,
          data loss, or other damages arising out of or related to your use of our website or products.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-700 mb-4">GOVERNING LAW</h2>
        <p>
          These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and
          construed in accordance with the laws of the State or Province in which our business is registered.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-700 mb-4">CONTACT INFORMATION</h2>
        <p className="mb-4">For any questions about these Terms of Service, please contact us at:</p>
        <p>Email: support@tramessy.com</p>
      </section>
      </div>
    </main>
  )
}
