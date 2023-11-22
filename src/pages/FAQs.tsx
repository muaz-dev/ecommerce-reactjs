import React from "react";
import Layout from "../components/Layout";

function FAQs() {
  const faqData = [
    {
      category: "Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Our standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout for faster delivery.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we offer international shipping to select countries. Please check our shipping policy for a list of supported countries and rates.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns within 30 days of purchase. Items must be in their original condition. Please visit our Returns & Exchanges page for detailed instructions.",
        },
        {
          question: "How do I exchange an item?",
          answer:
            "For exchanges, please return the original item for a refund and place a new order for the desired product.",
        },
      ],
    },
    {
      category: "Product Information",
      questions: [
        {
          question: "How do I find the right size?",
          answer:
            "You can refer to our detailed sizing guide, accessible on each product page, to help you find the best fit.",
        },
        {
          question: "Are all your products in stock?",
          answer:
            "Our website reflects current stock levels. If an item is out of stock, you can sign up for restock notifications on the product page.",
        },
      ],
    },
    {
      category: "Payment Methods",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including credit/debit cards, PayPal, and Apple Pay.",
        },
        {
          question: "Is my payment information secure?",
          answer:
            "Absolutely. We use industry-standard encryption to protect your personal and payment information.",
        },
      ],
    },
    {
      category: "Account Management",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking the 'Sign Up' button on our website and following the prompts to enter your details.",
        },
        {
          question: "I forgot my password. What should I do?",
          answer:
            "If you’ve forgotten your password, click on the ‘Forgot Password’ link on the login page and follow the instructions to reset it.",
        },
      ],
    },
    {
      category: "Customer Support",
      questions: [
        {
          question: "How can I contact customer service?",
          answer:
            "You can reach our customer service team via email at support@yourwebsite.com, or by phone at [phone number]. We’re available Monday through Friday from 9 am to 5 pm.",
        },
        {
          question: "Can I change or cancel my order after placing it?",
          answer:
            "Orders can be changed or cancelled within 1 hour of placing them. Please contact customer service immediately to request changes.",
        },
      ],
    },
  ];
  return (
    <>
      <Layout>
        <div className="space-y-4 py-8 w-3/5 mx-auto">
          <h1 className="text-center text-3xl font-bold">FAQs</h1>
          {faqData.map((section) => {
            return (
              <div key={section.category}>
                <h1 className="text-blue-600 font-bold my-5">
                  {section.category}
                </h1>

                {section.questions.map((faq) => {
                  return (
                    <>
                      <details
                        className="group [&_summary::-webkit-details-marker]:hidden"
                        key={faq.question}
                        open
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                          <h2 className="font-medium">{faq.question}</h2>

                          <svg
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                          {faq.answer}
                        </p>
                      </details>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default FAQs;
