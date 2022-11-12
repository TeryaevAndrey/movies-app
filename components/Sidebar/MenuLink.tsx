import { style } from "@mui/system";
import Link from "next/link";
import React, { FC } from "react";
import {IconType} from "react-icons";
import styles from "../../styles/Sidebar.module.css"

interface ISidebarLink {
  icon?: IconType;
  title: string;
  href: string;
}

const MenuLink: FC<ISidebarLink> = ({icon, title, href}) => {
  return (
    <>
      <Link className={styles.link} href={href}>
        
        {icon && React.createElement(icon, {className: styles.icon})}
        
        {title}
      </Link>
    </>
  );
};

export default MenuLink;
