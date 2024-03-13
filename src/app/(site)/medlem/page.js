import FullTeaser from '@/components/fullteaser/fullteaser';
import UserForm from '@/components/userForm/userForm';

const MemberPage = () => {
	const teaserConfig = {
		link: {
			url: '',
			text: '',
		},
		headline: {
			one: {
				text: 'BLIV',
				color: '#fd88a0',
			},
			two: {
				text: 'MEDLEM',
				color: '#fd88a0',
			},
		},
		image: '/headers/subscribers.jpg',
		body: {
			text: `<p>Opret dig some medlem og få flere fordele og nyheder I der øjeblik vi har dem.
            <br> <br>
            Send gerne ris eller ros med når du melder dig ind, vi er altid parate til dialog.
            </p>`,
			color: '#000',
		},
		bodyBackground: '#fff',
	};

	return (
		<div className="page">
			<FullTeaser config={teaserConfig} />
			<UserForm />
		</div>
	);
};

export default MemberPage;
