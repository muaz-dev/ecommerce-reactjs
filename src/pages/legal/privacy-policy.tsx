import React from "react";
import Layout from "../../components/Layout";
import { h1Style, h2Style, pStyle } from "../../style/helper";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="w-4/5 md:w-3/5 mx-auto">
        <h1 className={h1Style}>Privacy Policy</h1>

        <h2 className={h2Style}>Introduction</h2>
        <p className={pStyle}>
          At Defa, we are committed to protecting the privacy and security of
          our customers and site visitors. This policy outlines how we handle
          and use personal information collected through our platform.
        </p>

        <h2 className={h2Style}>Information Collection</h2>
        <p className={pStyle}>
          We collect information from you when you register on our site, place
          an order, subscribe to our newsletter, or fill out a form. This
          information may include:
        </p>
        <ul>
          <li>
            Your name, email address, mailing address, phone number, and payment
            details
          </li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className={h2Style}>Use of Information</h2>
        <p className={pStyle}>
          The information we collect may be used in the following ways:
        </p>
        <ul>
          <li>To personalize your experience and meet your individual needs</li>
          <li>To improve our website based on your feedback</li>
          <li>To improve customer service</li>
          <li>
            To process transactions and send periodic emails regarding your
            order or other products and services
          </li>
        </ul>

        <h2 className={h2Style}>Data Protection</h2>
        <p className={pStyle}>
          We implement a variety of security measures to maintain the safety of
          your personal information. Your personal information is contained
          behind secured networks and is only accessible by a limited number of
          persons who have special access rights to such systems.
        </p>

        <h2 className={h2Style}>Cookies</h2>
        <p className={pStyle}>
          Our website uses cookies to enhance the user experience. Cookies are
          small files that a site transfers to your computer's hard drive
          through your Web browser (if you allow) that enables the site's
          systems to recognize your browser and capture and remember certain
          information.
        </p>

        <h2 className={h2Style}>Disclosure to Third Parties</h2>
        <p className={pStyle}>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties, except when we believe
          release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others' rights, property, or safety.
        </p>

        <h2 className={h2Style}>Third-Party Links</h2>
        <p className={pStyle}>
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites.
        </p>

        <h2 className={h2Style}>Consent</h2>
        <p className={pStyle}>
          By using our site, you consent to our website's privacy policy.
        </p>

        <h2 className={h2Style}>Changes to our Privacy Policy</h2>
        <p className={pStyle}>
          If we decide to change our privacy policy, we will update the Privacy
          Policy modification date below. This policy was last modified on
          21/11/23.
        </p>

        <h2 className={h2Style}>Contacting Us</h2>
        <p className={pStyle}>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below:
        </p>
        <p className={pStyle}>customer@defa.com</p>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
