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

export default function UpcomingEvent() {
	return (
		<Container>
			<LeftContainer>
				<Title>Upcoming Event</Title>
				<Undraw src="/undraw_events.png" layout="fill" objectFit="contain" />
			</LeftContainer>
			<RightContainer>
				<BoringImg src="/event.png" layout="fill" objectFit="contain" />
			</RightContainer>
		</Container>
	);
}
