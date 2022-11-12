import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import styles from "../../styles/Sidebar.module.css";
import Menu from "./Menu";

const Sidebar: FC = () => {
  return(
    <div className={styles.sidebar}>
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <Menu />
    </div>
  );
}

export default Sidebar;