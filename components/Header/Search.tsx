import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Header.module.css";
import SearchImg from "../../public/images/search.svg";

const Search:FC = () => {
  return(
    <div className={styles.search}>
      <Image className={styles.searchImg} src={SearchImg} alt="search" />
      <input className={styles.searchInput} type="text" name="search" placeholder="Search" />
    </div>
  );
}

export default Search;