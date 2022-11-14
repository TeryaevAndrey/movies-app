import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ContinueCard from "./ContinueCard";
import PreviewImg from "../../../public/images/preview-sec-card.png";
import styles from "../../../styles/InfoBlock.module.css";
import ArrowRightImg from "../../../public/images/arrow-right.svg";

const ContinueFilms: FC = () => {
  return (
    <>
      <div className="filmsHeader">
        <h2 className="filmsTitle">
          Continue
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
          <ContinueCard
            src={PreviewImg}
            title="WandaVision"
            episode="1 Episode left"
            progress={60}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinueCard
            src={PreviewImg}
            title="WandaVision"
            episode="1 Episode left"
            progress={40}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinueCard
            src={PreviewImg}
            title="WandaVision"
            episode="1 Episode left"
            progress={80}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ContinueFilms;
