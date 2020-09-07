import Head from "next/head";
import Homes from "../src/templates/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flowbase - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homes />
      </main>
    </div>
  );
}
