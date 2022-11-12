import {FC} from "react";
import Image from "next/image";
import styles from "../../styles/Card.module.css";
import {AiOutlinePlus} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import CardBtn from "../CardBtn";

interface ICard {
  title: string;
  estimation: string;
  type: string;
  src: string;
}

const Card: FC<ICard> = ({title, estimation, type, src}) => {
  return(
    <div className={styles.card}>
      <Image className={styles.cardImg} src={src} alt={title} />
      <h3 className={styles.title}>
        {title}
      </h3>
      <button className={styles.addBtn}>
        <AiOutlinePlus />
      </button>
      <CardBtn title="Watch" />
    </div>
  );
}

export default Card;