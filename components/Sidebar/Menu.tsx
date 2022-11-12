import SidebarLink from "./SidebarLink";
import {BsHouseDoorFill} from "react-icons/bs";
import {TbGps} from "react-icons/tb";
import {TfiCup} from "react-icons/tfi"
import styles from "../../styles/Sidebar.module.css";

const Menu = () => {
  return(
    <div className={styles.menu}>
      <span className={styles.title}>Menu</span>
      <SidebarLink icon={BsHouseDoorFill} title="Home" />
      <SidebarLink icon={TbGps} title="Discover" />
      <SidebarLink icon={TfiCup} title="Awards" />
      <SidebarLink icon={BsHouseDoorFill} title="Home" />
    </div>
  );
}

export default Menu;