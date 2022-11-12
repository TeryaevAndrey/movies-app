import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import styles from "../../styles/Banner.module.css";
import {AiOutlinePlus} from "react-icons/ai";
import CardBtn from "../CardBtn";

interface IBannerItem {
  src: StaticImageData;
  title: string;
}

const Item: FC<IBannerItem> = ({src, title}) => {
  return(
    <div className={styles.item}>
      <Image className={styles.itemImg} src={src} alt={title} placeholder="blur" />

      <h2 className={styles.title}>
        The crown
      </h2>
      <div className={styles.footer}>
      <button className={styles.addBtn}>
        <AiOutlinePlus />
          Watchlist
      </button>
      <CardBtn />
      </div>
    </div>
  );
}

export default Item;