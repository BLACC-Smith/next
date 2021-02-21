import Head from 'next/head';
import styled from '@emotion/styled';
import UpcomingEvent from '../components/molecules/UpcomingEvent';
import { useEffect, useRef, useState } from 'react';

const Container = styled.main`
	background: #000;
	width: 100vw;
	height: ${({ containerHeight, innerHeight }) =>
		`calc(${containerHeight}px - ${containerHeight - innerHeight}px)`};
`;

export default function Home() {
	const container = useRef(null);
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
				<UpcomingEvent />
			</Container>
		</>
	);
}
