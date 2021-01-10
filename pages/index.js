import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.main`
	background: #fff;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const DiscordCTA = styled.p`
	padding: 24px 36px;
	background: #000;
	font-weight: 600;
	cursor: pointer;
	color: #fff;
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
				<title>Youtube Submissions</title>
			</Head>
			<DiscordCTA>Sign in</DiscordCTA>
		</Container>
	);
}
