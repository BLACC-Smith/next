import styled from '@emotion/styled';
import { ImTwitch, ImYoutube } from 'react-icons/im';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const RestreamWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
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
	// margin-top: 117px;

	// @media (max-width: 600px) {
	// 	margin-top: 0;
	// }
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

export default function LivestreamContainer({ width, height }) {
	return (
		<Container>
			<RestreamWrapper>
				<IframeContainer>
					<iframe
						src="https://embed.restream.io/player/index.html?token=e2022a75ef752141417cf11887150a39"
						width={width}
						height={height}
						frameBorder="0"
						allowFullScreen
					/>
				</IframeContainer>
			</RestreamWrapper>
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
		</Container>
	);
}
