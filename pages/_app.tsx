import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Global } from "@emotion/react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { globalFonts, globalStyles } from "@/styles/global";
import Footer from "@modules/footer";
import Header from "@modules/header";
import Head from "next/head";

const outfitFont = localFont({
  src: [
    {
      path: "../assets/fonts/outfit/static/Outfit-Regular.ttf",
      weight: "400"
    },
    {
      path: "../assets/fonts/outfit/static/Outfit-Medium.ttf",
      weight: "500"
    },
    {
      path: "../assets/fonts/outfit/static/Outfit-SemiBold.ttf",
      weight: "600"
    },
    {
      path: "../assets/fonts/outfit/static/Outfit-Bold.ttf",
      weight: "700"
    }
  ],
  display: "swap",
  preload: true
});

const dmSansFont = localFont({
  src: [
    {
      path: "../assets/fonts/dm-sans/static/DMSans-Regular.ttf",
      weight: "400"
    },
    {
      path: "../assets/fonts/dm-sans/static/DMSans-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../assets/fonts/dm-sans/static/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic"
    },
    {
      path: "../assets/fonts/dm-sans/static/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../assets/fonts/dm-sans/static/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic"
    }
  ],
  display: "swap",
  preload: true
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-MH5RF4FK" />
      <GoogleAnalytics gaId="G-7L2RMX12CD" />
      <Head>
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />
        <link rel="preconnect" href="https://images.ctfassets.net" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Global
        styles={[
          globalStyles,
          globalFonts({
            heading: outfitFont.style.fontFamily,
            primary: dmSansFont.style.fontFamily
          })
        ]}
      />
      <Footer />
    </>
  );
}
