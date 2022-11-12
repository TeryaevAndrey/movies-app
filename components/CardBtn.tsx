import { FC } from "react";
import styles from "../styles/CardBtn.module.css";

interface ICardBtn {
  title?: string;
}

const CardBtn: FC<ICardBtn> = ({title = "Watch now"}) => {
  return(
    <button className={styles.watchBtn}>
      {title}
    </button>
  );
}

export default CardBtn;