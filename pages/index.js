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
				<title>BLACC</title>
				<meta property="og:image" content="/blacc.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="blacc.xyz" />
				<meta property="twitter:url" content="https://blacc.xyz/live" />
				<meta name="twitter:title" content="BLACC" />
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
