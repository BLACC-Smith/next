import Head from 'next/head';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled.main`
	background: #000;
	width: 100vw;
	height: ${({ containerHeight, innerHeight }) =>
		`calc(${containerHeight}px - ${containerHeight - innerHeight}px - 117px)`};
`;
const Jumbotron = styled.div`
	width: 100vw;
	height: calc(100% - 117px);
	flex: 1 1 0%;
	padding: 128px 64px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	align-items: center;

	@media (max-width: 600px) {
		padding: 128px 24px;
	}
`;
const PrimaryText = styled.p`
	color: #fff;
	font-size: 48px;
	font-weight: 400;
	letter-spacing: 5px;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 32px;
	}
`;
const SecondaryText = styled.p`
	color: #e0e0e0;
	width: 100%;
	font-weight: 300;
	line-height: 48px;
	font-size: 32px;
	margin: 16px 0;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 24px;
	}
`;
const CTA = styled.a`
	padding: 24px 36px;
	background: #000;
	font-weight: 600;
	cursor: pointer;
	color: #fff;
	margin-top: 16px;
	display: inline-block;
	user-select: none;
	border-radius: 4px;
	transition: all 0.2s;
	border: 1px solid #fff;
	:hover {
		color: #000;
		background: #fff;
	}
`;
const Click = styled.div`
	background: transparent;
	position: absolute;
	height: 74px;
	top: 0;
	left: 0;
	width: 100%;
`;
const Widget = styled.div`
	z-index: 10;
	position: fixed;
	cursor: pointer;
	bottom: 32px;
	right: 48px;
	transition: all 0.3s;
	height: ${({ open }) => (open ? '50%' : '74px')};
	display: inline-block;

	@media (max-width: 600px) {
		right: 24px;
		width: calc(100% - 48px);
	}
`;

export default function Home() {
	const container = useRef(null);
	const [openWidget, setOpenWidget] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);

	return (
		<>
			<Head>
				{/* HTML Meta Tags  */}
				<title>BLACC, The Black Coder Community</title>
				<meta
					name="description"
					content="BLACC (The Black Coder Community), a safe space for black people to exchange knowledge and to be exposed to new technologies."
				/>

				{/* Facebook Meta Tags  */}
				<meta
					property="og:url"
					content="https://next-4c9n6kra3-garrett1tolbert.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="BLACC, The Black Coder Community" />
				<meta
					property="og:description"
					content="BLACC (The Black Coder Community), a safe space for black people to exchange knowledge and to be exposed to new technologies."
				/>
				<meta property="og:image" content="/blacc.png" />

				{/* Twitter Meta Tags  */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="next-4c9n6kra3-garrett1tolbert.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://next-4c9n6kra3-garrett1tolbert.vercel.app/"
				/>
				<meta name="twitter:title" content="BLACC, The Black Coder Community" />
				<meta
					name="twitter:description"
					content="BLACC (The Black Coder Community), a safe space for black people to exchange knowledge and to be exposed to new technologies."
				/>
				<meta name="twitter:image" content="/blacc.png" />
			</Head>
			<Container
				ref={container}
				innerHeight={windowHeight}
				containerHeight={container.current?.offsetHeight}
			>
				<Head>
					<title>BLACC</title>
				</Head>
				<Jumbotron
					innerHeight={windowHeight}
					containerHeight={container.current?.offsetHeight}
				>
					<PrimaryText>The Black Coder Community</PrimaryText>
					<SecondaryText>
						A community exemplifying black excellence and pushing the needle
						within tech
					</SecondaryText>
					<CTA href="https://discord.gg/9Bh3TZ2" target="_blank">
						Join our community
					</CTA>
					<Widget open={openWidget}>
						<Click onClick={() => setOpenWidget(!openWidget)} />
						<iframe
							src="https://discord.com/widget?id=769610692297752586&theme=dark"
							width="100%"
							height="100%"
							allowtransparency="true"
							frameBorder="0"
							sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
						></iframe>
					</Widget>
				</Jumbotron>
			</Container>
		</>
	);
}
