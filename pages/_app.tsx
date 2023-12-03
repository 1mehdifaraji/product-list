import { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";

import { QueryClient, QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.API;

export default function MyApp({ Component, pageProps }: AppProps) {
  const handleRouteStart = () =>
    NProgress.configure({ showSpinner: false }).start();
  const handleRouteDone = () =>
    NProgress.configure({ showSpinner: false }).done();
  useEffect(() => {
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        closeButton={false}
        bodyClassName="font-vazir text-xs md:text-sm text-black m-0 p-0"
        toastClassName="rounded-xl bg-white my-5 mx-4 md:mx-0"
        progressClassName="bg-blue h-0.5"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
        pauseOnHover={false}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
