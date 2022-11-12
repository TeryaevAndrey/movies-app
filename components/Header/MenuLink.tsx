import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Header.module.css";

interface IMenuLink {
  href: string;
  title: string;
}

const MenuLink: FC<IMenuLink> = ({href, title}) => {
  return(
    <li className={styles.menuItem}>
      <Link href={href}>
        {title}
      </Link>
    </li>
  );
}

export default MenuLink;