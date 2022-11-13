import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../../styles/ContinueCard.module.css";
import CardBtn from "../../CardBtn";

interface IContinueCard {
  src: string | StaticImageData;
  title: string;
  episode: string;
  progress: number;
}

const ContinueCard: FC<IContinueCard> = ({ src, title, episode, progress }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          className={styles.cardImg}
          src={src}
          alt={title}
          placeholder="blur"
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.episode}>{episode}</span>
          <div className={styles.progressBar}>
            <div style={{width: `${progress}%`}}></div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.dropBtn}>Drop</button>
        <CardBtn title="Watch" style={{maxHeight: "35px", borderRadius: "7px", maxWidth: "110px"}} />
      </div>
    </div>
  );
};

export default ContinueCard;
