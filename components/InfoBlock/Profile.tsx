import {FC} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/infoBlock.module.css";
import ArrowBottomImg from "../../public/images/arrow-bottom.svg";

interface IProfile {
    name: string;
    src: StaticImageData | string;
}

const Profile: FC<IProfile> = ({name, src}) => {
    return(
        <div className={styles.profile}>
            <span className={styles.name}>
                {name}
                <Image src={ArrowBottomImg} alt="more" />
            </span>
            <Image className={styles.avatarImg} src={src} alt={name} placeholder="blur" />
        </div>
    );
}

export default Profile;