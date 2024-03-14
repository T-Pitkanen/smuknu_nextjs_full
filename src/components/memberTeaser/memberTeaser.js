
import styles from './memberTeaser.module.css';

const MemberTeaser = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h2 className={styles.h2}>MEDLEM?</h2>
				<p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
				<a href="/medlem" className={styles.btn}>
					Bliv medlem af kundeklubben
				</a>
			</div>
		</div>
	);
};

export default MemberTeaser;
