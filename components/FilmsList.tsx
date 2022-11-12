import {FC} from "react";
import styles from "../styles/FilmsList.module.css";
import Card from "./Card/Card";
import PreviewCard from "../public/images/preview-card.png";

interface IFilmsList {
  title: string;
}

const FilmsList: FC<IFilmsList> = ({title}) => {
  return(
    <div className={styles.films}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.list}>
        <Card src={PreviewCard} title="Loki" estimation={5} type="Superhero" />
        <Card src={PreviewCard} title="Loki" estimation={5} type="Superhero" />
        <Card src={PreviewCard} title="Loki" estimation={5} type="Superhero" />
        <Card src={PreviewCard} title="Loki" estimation={5} type="Superhero" />
        <Card src={PreviewCard} title="Loki" estimation={5} type="Superhero" />
      </div>
    </div>
  );
}

export default FilmsList;