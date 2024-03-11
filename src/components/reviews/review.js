import Image from 'next/image';
import styles from './review.module.css';


const Review = ({review}) => {
    return <div className={styles.review}>

        <div className={styles.image}>

            <Image src={review.image} alt={review.name} width={150} height={150}/>

           

        </div>
        <div className={styles.body} dangerouslySetInnerHTML={{__html : review.description}}></div>

        <div className={`${styles.author} ${styles.sm}`}>
            <h3 className={styles.headline}>{review.name}</h3>
            <span>{review.byline}</span>
        </div>

    </div>
}

export default Review;