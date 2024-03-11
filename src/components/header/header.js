import Image from 'next/image';
import styles from './header.module.css';

const Header = ({ image, title, subtitle }) => {
    const titleStyle = {
        color: title.color
    };

    const subtitleStyle = {
        color: subtitle.color
    };

    return (
        <div className={styles.header}>
            {/* <img src={image} alt="Header Background" className={styles.headerImg} /> */}

            <div className={styles.headerText}>
                <h1 className={styles.headerTitle} style={titleStyle}>{title.text}</h1>
                {subtitle && <h1 className={styles.headerSubtitle} style={subtitleStyle}>{subtitle.text}</h1>}
            </div>
        </div>
    );
};

export default Header;