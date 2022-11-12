import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

const HomePage: FC = () => {
  return(
    <>
    <Head>
      <title>Home page</title>
    </Head>
      <div className="mainContent">
        <Header />
        <div className="content">
          <Banner />
        </div>
      </div>
    </>
  );
}

export default HomePage;