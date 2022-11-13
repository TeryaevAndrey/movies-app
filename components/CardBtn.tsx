import { FC } from "react";
import styles from "../styles/CardBtn.module.css";

interface ICardBtn {
  title?: string;
  style?: object;
}

const CardBtn: FC<ICardBtn> = ({title = "Watch now", style}) => {
  return(
    <button className={styles.watchBtn} style={style}>
      {title}
    </button>
  );
}

export default CardBtn;