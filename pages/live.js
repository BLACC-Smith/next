import Head from 'next/head';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import PastEvents from '../components/molecules/PastEvents';
import LivestreamContainer from '../components/molecules/LivestreamContainer';

const Container = styled.div`
	width: 100vw;
	height: calc(100vh - 117px);
	background: #000;
	margin: auto;
`;
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	background: #000;
`;

export default function Live() {
	const container = useRef(null);
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (container?.current) {
			setHeight(container.current.offsetHeight);
			setWidth(container.current.offsetWidth);
		}
	}, [container]);

	return (
		<>
			<Head>
				{/* HTML Meta Tags  */}
				<title>Live Events w/BLACC</title>
				<meta
					name="description"
					content="Check out what we're up to! Stay in the know about our live coding sessions and podacsts!"
				/>

				{/* Facebook Meta Tags  */}
				<meta property="og:url" content="https://blacc.xyz/live" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Live Events w/BLACC" />
				<meta
					property="og:description"
					content="Check out what we're up to! Stay in the know about our live coding sessions and podacsts!"
				/>
				<meta property="og:image" content="/blacc_live.png" />

				{/* Twitter Meta Tags  */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="blacc.xyz" />
				<meta property="twitter:url" content="https://blacc.xyz/live" />
				<meta name="twitter:title" content="Live Events w/BLACC" />
				<meta
					name="twitter:description"
					content="Check out what we're up to! Stay in the know about our live coding sessions and podacsts!"
				/>
				<meta name="twitter:image" content="/blacc_live.png" />
			</Head>
			<Container id="hi" ref={container}>
				{!width || !height ? (
					<p>Loading</p>
				) : (
					<Wrapper>
						<LivestreamContainer width={width} height={height} />
						<PastEvents />
					</Wrapper>
				)}
			</Container>
		</>
	);
}
