import {FC} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/Card.module.css";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import CardBtn from "../CardBtn";

interface ICard {
  title: string;
  estimation: number;
  type: string;
  src: string | StaticImageData;
}

const Card: FC<ICard> = ({title, estimation, type, src}) => {
  return(
    <div className={styles.card}>
      <Image className={styles.cardImg} src={src} alt={title} placeholder="blur" />
      <div className={styles.header}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <div className={styles.estimation}>
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
          <AiFillStar className={styles.star} />
        </div>
      </div>

      <span className={styles.type}>
        {type}
      </span>

      <div className={styles.btns}>
      <button className={styles.addBtn}>
        <AiOutlinePlus />
      </button>
      <CardBtn title="Watch" />
      </div>
    </div>
  );
}

export default Card;