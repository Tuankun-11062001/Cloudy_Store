import SupportForm from "@/components/support/supportForm";
import React from "react";

export const metadata = {
  title: "Support - Cloudy Melody",
  description:
    "🙌 Support: Tôi rất coi trọng ý kiến của bạn! Hãy cho tôi biết những khó khăn bạn gặp phải hoặc những vấn đề cần cải thiện trên trang web. Mỗi ý kiến đóng góp đều là động lực để tôi hoàn thiện hơn.",
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
      <img className="support_page_head" src={data[0].banner} />

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
