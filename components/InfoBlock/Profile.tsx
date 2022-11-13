import {FC} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/infoBlock.module.css";
import ArrowBottomImg from "../../public/images/arrow-bottom.svg";
import Link from "next/link";

interface IProfile {
    name: string;
    src: StaticImageData | string;
}

const Profile: FC<IProfile> = ({name, src}) => {
    return(
        <div className={`${styles.profile} ${styles.pr}`}>
            <Link href="/profile" className={styles.name}>
                {name}
                <Image src={ArrowBottomImg} alt="more" />
            </Link>
            <Image className={styles.avatarImg} src={src} alt={name} placeholder="blur" />
        </div>
    );
}

export default Profile;