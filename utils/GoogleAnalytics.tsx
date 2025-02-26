import Script from "next/script";
import { FC } from "react";

const GA_TRACKING_ID = "G-N51YGM8BLG";

const GoogleAnalytics: FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
