import Script from "next/script";
import React from "react";

// Hàm lấy giá trị cookie
const getCookie = (name) => {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null; // Không tìm thấy cookie
};

const ConsentMode = () => {
  return (
    <>
      {/* Tải gtag.js từ Google Tag Manager */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZBYVS3ZRM8"
        strategy="afterInteractive"
      />

      {/* Đảm bảo gtag được khởi tạo sau khi script được tải */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZBYVS3ZRM8');
          
          // Hàm setConsentMode sẽ được gọi sau khi gtag đã được khởi tạo
          function setConsentMode(consentStatus) {
            const options = {
              'ad_storage': consentStatus === 'granted' ? 'granted' : 'denied',
              'analytics_storage': consentStatus === 'granted' ? 'granted' : 'denied'
            };
            gtag('consent', 'update', options);
          }

          // Kiểm tra trạng thái cookie consent từ cookie (được thiết lập trong banner cookie của bạn)
          const cookiesConsent = document.cookie.split('; ').find(row => row.startsWith('cookiesConsent='))?.split('=')[1] || null;

          // Cập nhật consent mode dựa trên sự đồng ý của người dùng
          if (cookiesConsent === 'allowed') {
            setConsentMode('granted');
          } else {
            setConsentMode('denied');
          }
        `}
      </Script>
    </>
  );
};

export default ConsentMode;
