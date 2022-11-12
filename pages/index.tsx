import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import FilmsList from "../components/FilmsList";

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
          <FilmsList title="Popular on TinyMoviez" />
        </div>
      </div>
    </>
  );
}

export default HomePage;