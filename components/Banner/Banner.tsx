import { FC } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/Banner.module.css";
import Item from "./Item";
import BannerImg from "../../public/images/preview.jpg";

const Banner: FC = () => {
  return(
    <Swiper
        className={styles.bannerSlider}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        loop
      >
        <SwiperSlide>
          <Item src={BannerImg} title="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Item src={BannerImg} title="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Item src={BannerImg} title="test" />
        </SwiperSlide>
    </Swiper>
  );
}

export default Banner;