import Head from 'next/head';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { ImTwitch, ImYoutube } from 'react-icons/im';

const Container = styled.div`
	width: 100vw;
	height: calc(100vh - 117px);
	background: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const IframeContainer = styled.div`
	width: 50%;
	height: 40%;
	max-width: 960px;
	max-height: 576px;
	border-radius: 16px;
	overflow: hidden;
	border: 1px solid #757575;

	@media (max-width: 600px) {
		width: 85%;
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

const CTAContainer = styled.div`
	margin-top: 32px;
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
				<title>Live Events w/BLACC</title>
				<meta
					name="description"
					content="Check out what we're up to! Stay in the know about our live coding sessions and podacsts!"
				/>
				<meta property="og:title" content="Live Events w/BLACC" />
				<meta
					property="og:description"
					content="Check out what we're up to! Stay in the know about our live coding sessions and podacsts!"
				/>
			</Head>
			<Container id="hi" ref={container}>
				{!width || !height ? (
					<p>Loading</p>
				) : (
					<>
						<IframeContainer>
							<iframe
								src="https://embed.restream.io/player/index.html?token=e2022a75ef752141417cf11887150a39"
								width={width}
								height={height}
								frameBorder="0"
								allowFullScreen
							/>
						</IframeContainer>
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
					</>
				)}
			</Container>
		</>
	);
}
