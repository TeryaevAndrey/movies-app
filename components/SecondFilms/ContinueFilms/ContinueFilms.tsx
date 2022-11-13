import { FC } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import ContinueCard from "./ContinueCard";
import PreviewImg from "../../../public/images/preview-sec-card.png";
import styles from "../../../styles/InfoBlock.module.css";

const ContinueFilms: FC = () => {
  return(
    <Swiper 
    className={styles.filmsSlider}
    spaceBetween={25}
    slidesPerView={1.5}
    >
      <SwiperSlide>
        <ContinueCard src={PreviewImg} title="WandaVision" episode="1 Episode left" progress={40} />
      </SwiperSlide>
      <SwiperSlide>
        <ContinueCard src={PreviewImg} title="WandaVision" episode="1 Episode left" progress={40} />
      </SwiperSlide>
      <SwiperSlide>
        <ContinueCard src={PreviewImg} title="WandaVision" episode="1 Episode left" progress={40} />
      </SwiperSlide>
    </Swiper>
  );
}

export default ContinueFilms;