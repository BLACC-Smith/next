import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: calc(100% - 117px);

	@media (max-width: 600px) {
		height: auto;
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
	padding: 24px;
`;
const Img = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 4px;
`;
const Title = styled.p`
	font-size: 36px;
	font-weight: bold;
	color: #fff;
`;
const UndrawContainer = styled.div`
	height: 100%;
	width: auto;
	margin-top: 16px;
	position: relative;

	@media (max-width: 600px) {
		display: none;
	}
`;

export default function UpcomingEvent() {
	return (
		<Container>
			<LeftContainer>
				<Title>Upcoming Events</Title>
				<UndrawContainer>
					<Image src="/undraw_events.png" layout="fill" objectFit="contain" />
				</UndrawContainer>
			</LeftContainer>
			<RightContainer>
				<Img>
					<Image src="/event.png" layout="fill" objectFit="contain" />
				</Img>
			</RightContainer>
		</Container>
	);
}
