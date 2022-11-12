import { FC } from "react";
import styles from "../../styles/Header.module.css";
import Menu from "./Menu";
import Search from "./Search";

const Header:FC = () => {
  return(
    <div className={styles.header}>
      <Menu />
      <Search />
    </div>
  );
}

export default Header;