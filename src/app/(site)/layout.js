import Navigation from '@/components/navigation/navigation';
import Footer from '@/components/footer/footer';

export const metadata = {
    title: "Smuk Nu",
    description: "Generated by create next app",
  };

export default function siteLayout({ children }) {
	return (
		<div>
			<Navigation></Navigation>
			{children}
			<Footer />
		</div>
	);
}