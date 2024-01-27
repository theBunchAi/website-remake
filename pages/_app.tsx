import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { globalStyles } from "@/styles/global";
import Footer from "@modules/footer";
import Header from "@modules/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-MH5RF4FK" />
      <GoogleAnalytics gaId="G-7L2RMX12CD" />
      <Header />
      <Component {...pageProps} />
      <Global styles={[globalStyles]} />
      <Footer />
    </>
  );
}
