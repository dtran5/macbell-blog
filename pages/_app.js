import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import TagManager from "react-gtm-module";
// styles
import "../styles/globals.css";

import Layout from "../components/layout/Layout";
import { NavContextProvider } from "../context/NavCloseContext";

function MyApp({ Component, pageProps, router }) {
  const tagManagerArgs = {
    gtmId: "GTM-W38G69G",
    // events: {
    //   formComplete: "formComplete",
    // },
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <NavContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.jpg" />
        </Head>
        <motion.div
          //router lets motion recognize route change

          key={router.asPath}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.1,
                ease: "easeIn",
              },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </NavContextProvider>
  );
}

export default MyApp;
