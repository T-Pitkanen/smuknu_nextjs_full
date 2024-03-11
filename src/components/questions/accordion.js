'use client'
import styles from './accordions.module.css';
import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

const Accordion = ({header, body}) => {

    const [isActive, setIsActive] = useState(false);

    return <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>

      <div className={styles.body}>

        <h2 onClick={() => setIsActive(!isActive)}><FaQuestion className={styles.icon} />{header}</h2>
        
        <div className={`${styles.textblock}`} dangerouslySetInnerHTML={{__html:body}}></div>

      </div>

    </div>
};

export default Accordion;