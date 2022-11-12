import { FC } from "react";
import styles from "../../styles/Header.module.css";
import MenuLink from "./MenuLink";

const Menu: FC = () => {
  return(
    <ul className={styles.menu}>
      <MenuLink href="/movies" title="Movies" />
      <MenuLink href="/shows" title="TV Shows" />
      <MenuLink href="/anime" title="Anime" />
    </ul>
  );
}

export default Menu;