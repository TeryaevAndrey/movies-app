import MenuLink from "./MenuLink";
import { BsHouseDoorFill } from "react-icons/bs";
import { TbGps } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import styles from "../../styles/Sidebar.module.css";
import { FC } from "react";
import {AiOutlineFieldTime} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import {AiOutlineDownload} from "react-icons/ai";
import {AiFillSetting} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";

const Menu: FC = () => {
  return (
    <>
      <div className={styles.menu}>
        <span className={styles.title}>Menu</span>
        <MenuLink icon={BsHouseDoorFill} title="Home" href="/" />
        <MenuLink icon={TbGps} title="Discover" href="/discover" />
        <MenuLink icon={TfiCup} title="Awards" href="/awards" />
        <MenuLink icon={BsHouseDoorFill} title="Home" href="/Celebrities" />
      </div>
      <div className={styles.menu}>
        <span className={styles.title}>Library</span>
        <MenuLink icon={AiOutlineFieldTime} title="Recent" href="/recent" />
        <MenuLink icon={AiOutlineStar} title="Top Rated" href="/top" />
        <MenuLink icon={AiOutlineDownload} title="Downloaded" href="/downloaded" />
      </div>
      <div className={styles.menu}>
        <span className={styles.title}>General</span>
        <MenuLink icon={AiFillSetting} title="Settings" href="/settings" />
        <MenuLink icon={BiLogOut} title="Log Out" href="/" />
      </div>
    </>
  );
};

export default Menu;
