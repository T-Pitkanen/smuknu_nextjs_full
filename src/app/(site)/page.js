'use client';
import Products from '@/components/products/products';
import Header from '@/components/header/header';


export default function Home() {

  const headerConfig = {
		link: {
			url: '#selected',
			text: 'Se udvalgte produkter',
		},

		headline: {
			one: {
				text: 'SKØNHED',
				color: '#000',
			},
			two: {
				text: 'FOR ALLE',
				color: '#000',
			},
		},
		image: '/headers/front.jpg',
		body: {
			text: `<p>Herunder har vi samlet spørgsmål og svar om sundhed.</p><p>Mange spørgsmål kommer fra medlemmer af smuknu.dk og andre er gode råd valgt af vores skønhedsredaktion</p>`,
			color: '#000',
		},
		bodyBackground: '#f7f0f2',
	};

	return (
		<div className={'page'}>
			<Header config={headerConfig}></Header>

			<Products
				headline={{ black: 'UDVALGT', pink: 'SKØNHED!' }}
				recommend={true}
			></Products>

			{/* <div id="scrollto_products">
				<Products recommended={visSorteret} headline={headlineObj}></Products>
			</div> */}

		
		</div>
	);
}
