import SupportForm from "@/components/support/supportForm";
import React from "react";

export const metadata = {
  title: "Support",
  description:
    "🙌 Support: I highly value your feedback! Let me know any difficulties you encounter or areas that need improvement on the website. Every piece of feedback is a motivation for me to improve and get better.",
};

const SupportPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const resSupport = await fetch(`${baseUrl}/support`, {
    next: {
      revalidate: 10,
    },
  });

  const { data } = await resSupport.json();

  return (
    <div className="support_page">
      <h1>Support</h1>
      <img
        className="support_page_head"
        src={data[0].banner}
        loading="lazy"
        alt={`banner`}
      />

      <div className="support_page_content">
        {data[0].content.map((item, index) => (
          <div className="support_about" key={item._id || index}>
            <h2>{item.titleContent}</h2>
            <div
              className="tiptap"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}

        <SupportForm data={data[0]} />
      </div>
    </div>
  );
};

export default SupportPage;
