import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.main`
	background: #000;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;
const DiscordCTA = styled.a`
	padding: 24px 36px;
	background: #fff;
	font-weight: 600;
	cursor: pointer;
	border-radius: 4px;
	transition: all 0.3s;
	:hover {
		transform: scale(1.1);
	}
`;

export default function Home() {
	return (
		<Container>
			<Head>
				<title>BLACC</title>
			</Head>
			<Image
				src="/blacc.png"
				alt="BLACC logo"
				width="300"
				height="300"
				objectFit="contain"
			/>
			<DiscordCTA href="https://discord.gg/9Bh3TZ2">
				Join our community
			</DiscordCTA>
		</Container>
	);
}
