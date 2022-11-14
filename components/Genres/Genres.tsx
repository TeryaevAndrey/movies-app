import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GenresCard from "./GenresCard";
import ArrowRightImg from "../../public/images/arrow-right.svg";
import styles from "../../styles/InfoBlock.module.css";

const Genres: FC = () => {
  return (
    <>
      <div className="filmsHeader">
        <h2 className="filmsTitle">
          Genres
        </h2>
        <Link href="/continue" className="moreFilmsBtn">
          See more
          <Image src={ArrowRightImg} alt="show more" />
        </Link>
      </div>
      <Swiper 
        className={styles.filmsSlider}
        spaceBetween={25}
        slidesPerView={1.5}
      >
        <SwiperSlide>
          <GenresCard title="Drama" />
        </SwiperSlide>
        <SwiperSlide>
          <GenresCard title="Thriller" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Genres;
