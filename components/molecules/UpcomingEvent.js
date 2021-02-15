import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	background: #000;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const LeftContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 64px;

	@media (max-width: 600px) {
		padding: 64px 24px;
	}
`;
const RightContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 24px 48px;
	position: relative;

	@media (max-width: 600px) {
		padding: 24px;
	}
`;

const Title = styled.p`
	font-size: 36px;
	font-weight: bold;
	color: #fff;
`;
const Undraw = styled.img`
	object-fit: contain;
	height: auto;
	width: 100%;
	margin-top: 24px;

	@media (max-width: 600px) {
		display: none;
	}
`;
const BoringImg = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;

const CTA = styled.a`
	padding: 12px 24px;
	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 24px;
	background: #9147ff;
	font-weight: 600;
	box-shadow: 2px 12px 24px rgba(145, 71, 255, 0.5);
	// position: absolute;
	// bottom: 36px;
	// left: 48px;

	@media (max-width: 600px) {
		// position: relative;
		// bottom: 0;
		// left: 0;
		margin-top: 16px;
	}
`;

export default function UpcomingEvent() {
	return (
		<Container>
			<LeftContainer>
				<Title>Upcoming Event</Title>
				<Undraw src="/undraw_events.png" layout="fill" objectFit="contain" />
				<CTA href="https://www.twitch.tv/blacc_xyz" target="_blank">
					JOIN EVENT
				</CTA>
			</LeftContainer>
			<RightContainer>
				<BoringImg src="/event.png" layout="fill" objectFit="contain" />
			</RightContainer>
		</Container>
	);
}
