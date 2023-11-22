import React from "react";
import Layout from "../../components/Layout";
import { h1Style, h2Style, pStyle } from "../../style/helper";

function ReturnPolicy() {
  return (
    <Layout>
      <div className="w-4/5 md:w-3/5 mx-auto">
        <h1 className={h1Style}>Returns Policy</h1>
        <hr />

        <h2 className={h2Style}>Overview</h2>
        <p className={pStyle}>
          At Defa, we strive to ensure that our customers are completely
          satisfied with their purchases. However, we understand that sometimes
          a product may not be exactly what you expected. To make the return
          process as smooth as possible, we have outlined our Returns Policy
          below.
        </p>

        <h2 className={h2Style}>Return Eligibility</h2>
        <ul>
          <li>
            <strong>Time Frame:</strong> Items must be returned within 30 days
            of the purchase date.
          </li>
          <li>
            <strong>Condition:</strong> Returned items must be in their original
            packaging, unused, and in the same condition as received.
          </li>
          <li>
            <strong>Proof of Purchase:</strong> A valid receipt or proof of
            purchase is required for all returns.
          </li>
        </ul>

        <h2 className={h2Style}>Non-Returnable Items</h2>
        <p className={pStyle}>
          Please note that certain types of items cannot be returned, such as:
        </p>
        <ul>
          <li>Custom-made or personalized items</li>
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        <p className={pStyle}>
          For these items, sales are considered final unless there is a defect
          or fault.
        </p>

        <h2 className={h2Style}>Process for Returns</h2>
        <ul>
          <li>
            <strong>Request a Return:</strong> Contact our customer service team
            at customer@defa.com to initiate a return. Please provide your order
            number and reason for return.
          </li>
          <li>
            <strong>Receive Return Authorization:</strong> Once your return is
            approved, we will provide you with a Return Authorization number and
            return shipping address.
          </li>
          <li>
            <strong>Ship the Item Back:</strong> Pack the item securely and
            include the Return Authorization number in the package. You are
            responsible for return shipping costs unless the return is due to a
            defect or error on our part.
          </li>
          <li>
            <strong>Receive Your Refund:</strong> After we receive and inspect
            the returned item, we will process your refund. Refunds are
            typically issued to the original payment method within 60 business
            days.
          </li>
        </ul>

        <h2 className={h2Style}>Exchanges</h2>
        <p className={pStyle}>
          If you need to exchange an item for the same item in a different size
          or color, please follow the same process as above. Indicate that you
          would like an exchange when you request your Return Authorization.
        </p>

        <h2>Defective or Damaged Items</h2>
        <p>
          If you receive a defective or damaged item, please contact us
          immediately at customer@defa.com. We will prioritize replacing or
          refunding your purchase in such cases.
        </p>

        <h2 className={h2Style}>Questions?</h2>
        <p className={pStyle}>
          If you have any questions about our Returns Policy, please contact us
          at customer@defa.com. We're here to help!
        </p>
      </div>
    </Layout>
  );
}

export default ReturnPolicy;
