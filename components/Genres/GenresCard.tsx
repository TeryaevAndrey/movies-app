import {FC} from "react";
import Image from "next/image";
import styles from "../../styles/GenresCard.module.css";
import PreviewGenresImg from "../../public/images/preview-genres.png";

interface IGenresCard {
  title: string;
}

const GenresCard: FC<IGenresCard> = ({title}) => {
  return(
    <div className={styles.genresCard}>
      <Image className={styles.bg} src={PreviewGenresImg} alt={title} />
      <span className={styles.title}>
        {title}
      </span>
    </div>
  );
}

export default GenresCard;