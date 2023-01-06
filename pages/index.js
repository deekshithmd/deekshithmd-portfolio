import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/landing");
  });
  return (
    <>
      <Head>
        <title>Deekshith M D</title>
        <meta name="description" content="Deekshith M D Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
