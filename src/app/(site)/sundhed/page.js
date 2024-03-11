import FullTeaser from '@/components/fullteaser/fullteaser';
import Accordions from '@/components/questions/accordions';
import MemberTeaser from '@/components/memberTeaser/memberTeaser';
import styles from './page.module.css';

const MemberPage = () => {
	const teaserConfig = {
		link: {
			url: '',
			text: '',
		},
		headline: {
			one: {
				text: 'SPØRG OM',
				color: '#fff',
			},
			two: {
				text: 'SUNDHED',
				color: '#fff',
			},
		},
		image: '/headers/abouthealth.jpg',
		body: {
			text: `<p>Herunder har vi samlet spørgsmål og svar om sundhed.
            <br> <br>
            Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af cores skønhedsreaktion.
            </p>`,
			color: '#fff',
		},
		bodyBackground: '#fd88a0',
	};

	return (
		// <div className={`${styles['page-site']} page-wrapper`} ></div> This also works instead of line 30
		<div className={styles.page}>
		<FullTeaser config={teaserConfig} />
		<Accordions></Accordions>
		<MemberTeaser></MemberTeaser>
	</div>
	);
};

export default MemberPage;
