import React from "react";
import Layout from "../../components/Layout";
import { h1Style, h2Style, pStyle } from "../../style/helper";

function TermOfUse() {
  return (
    <Layout>
      <div className="w-4/5 md:w-3/5 mx-auto">
        <h1 className={h1Style}>Terms of Use</h1>

        <h2 className={h2Style}>Acceptance of Terms</h2>
        <p className={pStyle}>
          Welcome to Defa. By accessing and using our website, you agree to
          comply with and be bound by the following terms and conditions of use.
          Please review these terms carefully. If you do not agree to these
          terms, you should not use this site.
        </p>

        <h2 className={h2Style}>Use of Site</h2>
        <p className={pStyle}>
          The content and information on this site are provided as a convenience
          to you. The information and materials on this site may not be used for
          any unlawful purpose or in a manner which violates the rights of Defa
          or any third party.
        </p>

        <h2 className={h2Style}>Copyright and Trademarks</h2>
        <ul>
          <li>
            All content on this site, including text, graphics, logos, images,
            and software, is the property of Defa or its content suppliers and
            is protected by international copyright laws.
          </li>
          <li>
            The trademarks, names, logos, and service marks displayed on this
            website are registered and unregistered trademarks of Defa. Nothing
            on this website should be construed as granting any license or right
            to use any trademark without the prior written permission of Defa.
          </li>
        </ul>

        <h2 className={h2Style}>Limitation of Liability</h2>
        <p className={pStyle}>
          Defa will not be liable for any damages of any kind arising from the
          use of this site, including, but not limited to direct, indirect,
          incidental, punitive, and consequential damages.
        </p>

        <h2 className={h2Style}>Privacy Policy</h2>
        <p className={pStyle}>
          Your use of this website is also governed by our Privacy Policy, which
          is incorporated into these terms by this reference.
        </p>

        <h2 className={h2Style}>Changes to Terms</h2>
        <p className={pStyle}>
          Defa reserves the right, at its sole discretion, to change, modify,
          add, or remove portions of these terms at any time. Please check these
          terms periodically for changes. Your continued use of the [Your
          E-commerce Platform Name] site following the posting of changes to
          these terms will mean you accept those changes.
        </p>

        <h2 className={h2Style}>Governing Law</h2>
        <p className={pStyle}>
          These terms and conditions are governed by and construed in accordance
          with the laws of UN and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>

        <h2 className={h2Style}>Contact Information</h2>
        <p className={pStyle}>
          If you have any questions regarding these Terms of Use, please contact
          us at customer@defa.com.
        </p>
      </div>
    </Layout>
  );
}

export default TermOfUse;
