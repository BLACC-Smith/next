import Head from 'next/head';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { ImTwitch, ImYoutube } from 'react-icons/im';
import UpcomingEvent from '../components/molecules/UpcomingEvent';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #000;
`;
const Grid = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const Stream = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 117px;
	// background: yellow;
	justify-self: flex-end;

	@media (max-width: 600px) {
		height: calc(100% - 117px);
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: flex-end;
	}
`;
const IframeContainer = styled.div`
	width: 75%;
	height: 40%;
	max-width: 960px;
	max-height: 576px;
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid #757575;

	@media (max-width: 600px) {
		height: 85%;
		width: 85%;
	}
`;
const CTAContainer = styled.div`
	margin-top: 117px;

	@media (max-width: 600px) {
		margin-top: 0;
	}
`;
const CTA = styled.a`
	padding: 12px 24px;
	border-radius: 4px;
	display: flex;
	margin-bottom: 12px;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-size: 18px;
	background: ${({ bg }) => bg};
	font-weight: 500;
	box-shadow: ${({ shadow }) => `2px 12px 24px ${shadow}`};
	cursor: pointer;
`;

const Label = styled.p`
	font-size: 18px;
	color: #fff;
	margin-left: 12px;
`;

export default function Live() {
	const container = useRef(null);
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (container?.current) {
			setHeight(container.current.offsetWidth);
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
					<>
						<Grid>
							<Stream>
								<IframeContainer>
									<iframe
										src="https://embed.restream.io/player/index.html?token=e2022a75ef752141417cf11887150a39"
										width={width}
										height={height}
										frameBorder="0"
										allowFullScreen
									/>
								</IframeContainer>
							</Stream>
							<CTAContainer>
								<CTA
									bg="#9147ff"
									shadow="rgba(145, 71, 255, 0.5)"
									href="https://www.twitch.tv/blacc_xyz"
									target="_blank"
								>
									<ImTwitch />
									<Label>Watch Live on Twitch</Label>
								</CTA>
								<CTA
									bg="#ff0202"
									shadow="rgba(255, 2, 2, 0.5)"
									href="https://www.youtube.com/channel/UCaTP89xCILPWN9qfA9Ike2A"
									target="_blank"
								>
									<ImYoutube />
									<Label>Watch Live on Youtube</Label>
								</CTA>
							</CTAContainer>
						</Grid>
						<UpcomingEvent />
					</>
				)}
			</Container>
		</>
	);
}
