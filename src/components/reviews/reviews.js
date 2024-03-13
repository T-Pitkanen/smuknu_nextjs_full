'use client'
import Header from '../header/header';
import Review from './review';
import styles from './reviews.module.css';
import { useState, useEffect } from 'react';


const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviewsData(data);
        };

        getReviews();
    }, []);

    const headline = {
        title: {
            text: 'SKØNHEDER',
            color: '#fa96aa'
        },
        subtitle: {
            text: 'UDTALER',
            color: '#000'
        }
    };

    return (
        <div className={styles.reviews}>
           <Header title={headline.title} subtitle={headline.subtitle}></Header>
            <div>
                {reviewsData.length > 0 ? reviewsData.map((review, index) => (
                    <Review key={index} review={review} />
                )) : null}
            </div>
        </div>
    );
};

export default Reviews;