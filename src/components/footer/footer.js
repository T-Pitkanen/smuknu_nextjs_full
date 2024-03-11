import Link from 'next/link';
import styles from './footer.module.css';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    return <div className={styles.footer}>
         
         <div>   

            <div className={styles.social}>
                
                <Link href="/#"><FaFacebook className={styles.icon} /></Link>
                <Link href="/#"><FaInstagram className={styles.icon} /></Link>
                <Link href="/#"><FaPinterest className={styles.icon} /></Link>
                <Link href="/#"><FaTwitter className={styles.icon} /></Link>
                <Link href="/#"><FaYoutube className={styles.icon} /></Link>

            </div>     

            <div className={styles.address}>

                <Link href="mailto:">mail@smuknu.nu</Link>
                <Link href="mailto:">+45 123 345 33</Link>

            </div>
            
        </div>


    </div>
}

export default Footer;