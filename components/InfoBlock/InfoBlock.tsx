import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/InfoBlock.module.css";
import NotificationImg from "../../public/images/notification.svg";
import Profile from "./Profile";
import AvatarImg from "../../public/images/avatar.png";
import ContinueFilms from "../SecondFilms/ContinueFilms/ContinueFilms";

const InfoBlock: FC = () => {
  return(
    <div className={styles.infoBlock}>
      <div className={styles.header}>
        <Image className={styles.headerBtn} src={NotificationImg} alt="notification" />
        <Profile name="Samantha" src={AvatarImg} />
      </div>

      <ContinueFilms />
    </div>
  );
}

export default InfoBlock;