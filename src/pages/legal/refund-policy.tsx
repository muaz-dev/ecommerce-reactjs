import React from "react";
import Layout from "../../components/Layout";
import { h1Style, h2Style, pStyle } from "../../style/helper";

function RefundPolicy() {
  return (
    <Layout>
      <div className="w-4/5 md:w-3/5 mx-auto">
        <h1 className={h1Style}>Refund Policy</h1>

        <h2 className={h2Style}>Overview</h2>
        <p className={pStyle}>
          At Defa, our goal is to ensure customer satisfaction. If, for any
          reason, you are unsatisfied with your purchase, our refund policy
          outlines the steps and conditions under which a refund is possible.
        </p>

        <h2 className={h2Style}>Eligibility for Refunds</h2>
        <ul>
          <li>
            <strong>Time Frame:</strong> Refund requests must be made within 14
            days of the delivery date.
          </li>
          <li>
            <strong>Condition of Goods:</strong> Items must be returned in their
            original condition, unused, and with all original packaging and
            tags.
          </li>
          <li>
            <strong>Proof of Purchase:</strong> A valid receipt or proof of
            purchase is required for all refund requests.
          </li>
        </ul>

        <h2 className={h2Style}>Non-Refundable Items</h2>
        <p className={pStyle}>The following items cannot be refunded:</p>
        <ul>
          <li>Customized or personalized items.</li>
          <li>Gift cards.</li>
          <li>Downloadable software or digital products.</li>
          <li>Certain health and personal care items.</li>
        </ul>

        <h2 className={h2Style}>Process for Requesting a Refund</h2>
        <ul>
          <li>
            <strong>Initiate Refund Request:</strong> Contact our customer
            service team at customer@defa.com to begin the refund process.
          </li>
          <li>
            <strong>Return the Item:</strong> Send the item back to us at the
            address provided by our customer service team. The customer is
            responsible for return shipping costs unless the item is defective
            or an error occurred on our part.
          </li>
          <li>
            <strong>Inspection and Processing:</strong> Once we receive and
            inspect the item, we will process your refund. Refunds are usually
            processed within 15 business days and will be issued to the original
            payment method.
          </li>
        </ul>

        <h2 className={h2Style}>Partial Refunds</h2>
        <p className={pStyle}>
          In certain cases, only partial refunds are granted:
        </p>
        <ul>
          <li>Items that are returned more than 14 days after delivery.</li>
          <li>
            Items not in their original condition, are damaged, or missing parts
            for reasons not due to our error.
          </li>
        </ul>

        <h2 className={h2Style}>Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, contact us at customer@defa.com
        </p>

        <h2 className={h2Style}>Questions</h2>
        <p className={pStyle}>
          If you have any questions or concerns about our Refund Policy, please
          contact us at customer@defa.com. We are here to help and ensure your
          satisfaction with our services.
        </p>
      </div>
    </Layout>
  );
}

export default RefundPolicy;
