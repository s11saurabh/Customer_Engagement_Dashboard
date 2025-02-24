import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. Information We Collect

We may collect personal information such as your name, email address, mailing address, phone number, payment information, and any other information you provide when you:

Register for an account,
Place an order,
Subscribe to our newsletter,
Contact us through our contact form</p>
          <p>2. How We Use Your Information

We use the information we collect in the following ways:

To process and fulfill your orders,
To improve our website and customer service,
To send periodic emails regarding your order or other products and services,
To personalize your experience,
To administer promotions, surveys, or other site features</p>
          <p>3. Sharing Your Information

We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          <p>4. Changes to Our Privacy Policy

We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
          
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
