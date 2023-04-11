// @ts-nocheck
"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-MFG3H6NFSV"
      strategy="afterInteractive"
      async
      onReady={() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-MFG3H6NFSV");
      }}
    />
  );
}
