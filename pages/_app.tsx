import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles/global";
import Footer from "@modules/footer";
import Header from "@modules/header";

function GtmIframe() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MH5RF4FK"
        height="0"
        width="0"
        style={{ visibility: "hidden", display: "none" }}
      ></iframe>
    </noscript>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script async src="/assets/scripts/gtm.js" />
      </Head>
      <GtmIframe />
      <Script strategy="afterInteractive" defer async src="https://www.googletagmanager.com/gtag/js?id=G-7L2RMX12CD" />
      <Script defer id="ga-analaytics" strategy="afterInteractive" src="/assets/scripts/ga-analytics.js" />
      <Header />
      <Component {...pageProps} />
      <Global styles={[globalStyles]} />
      <Footer />
    </>
  );
}
