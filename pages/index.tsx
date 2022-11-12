import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";

const HomePage: FC = () => {
  return(
    <>
    <Head>
      <title>Home page</title>
    </Head>
      <div className="mainContent">
        <Header />
      </div>
    </>
  );
}

export default HomePage;