import { BasketContextProvider } from '@/context/basket';
import './globals.css';
import { quickFont } from '@/utils/fonts';

export const metadata = {
	title: 'MediaCollege Denmark',
	description: 'Vi arbejder...',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={quickFont.className}>
				<BasketContextProvider>{children}</BasketContextProvider>
			</body>
		</html>
	);
}