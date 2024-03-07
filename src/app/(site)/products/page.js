import Header from '@/components/header/header';
import Products from '@/components/products/products';

const ProductPage = () => {
	const headerConfig = {
		link: {
			url: '',
			text: '',
		},
		headline: {
			one: {
				text: 'SKØNNE',
				color: '#FFF',
			},
			two: {
				text: 'PRODUKTER',
				color: '#FFF',
			},
		},
		image: '/headers/products.jpg',
		body: {
			text: `<p>Herunder finder du alle vores produkter</p>`,
			color: '#FFF',
		},
		bodyBackground: 'rgba(0, 0, 0, 0.5)',
	};

	return (
		// <div className={`${styles['page-site']} page-wrapper`} ></div> This also works instead of line 30
		<div className="page">
			<Header config={headerConfig} />
			<Products
				config={{ black: 'ALT ER', pink: 'SKØNHED', recommended: false }}
			></Products>
		</div>
	);
};

export default ProductPage;
