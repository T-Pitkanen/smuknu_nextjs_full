import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';

const Header = ({ config }) => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div
					className={styles.content}
					style={{ backgroundColor: config?.bodyBackground }}
				>
					<div>
						<h1>
							<span style={{ color: config.headline.one.color }}>
								{config.headline.one.text}
							</span>
							<br />
							<span style={{ color: config.headline.two.color }}>
								{config.headline.two.text}
							</span>
						</h1>

						<div
							className={styles.body}
							style={{ color: config.body.color }}
							dangerouslySetInnerHTML={{ __html: config.body.text }}
						></div>

						{config.link?.url ? (
							<a className={styles.btn} href={config.link?.url}>
								{config.link?.text}
							</a>
						) : (
							''
						)}
					</div>
				</div>
			</div>

			<Image
				src={config.image}
				width={1200}
				height={400}
				alt={'image'}
			></Image>
		</div>
	);
};

export default Header;
