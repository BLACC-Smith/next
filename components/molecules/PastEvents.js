import styled from '@emotion/styled';
import Event from '../atoms/Event';

const Container = styled.div`
	background: #000;
	width: 100%;
	padding: 64px;

	@media (max-width: 600px) {
		padding: 64px 24px;
	}
`;
const Title = styled.p`
	font-size: 36px;
	font-weight: bold;
	color: #fff;
	margin-bottom: 48px;
`;
const Wrapper = styled.div`
	display: grid;
	row-gap: 24px;
`;

export default function PastEvents() {
	return (
		<Container>
			<Title>Past Events</Title>
			<Wrapper>
				<Event
					img="/4_10_21.png"
					title="🎙 Whiteness in Digital Products"
					date="Apr 10, 2021"
					url="https://www.youtube.com/watch?v=PSXEQ4X5T20&ab_channel=BLACCSmith"
				/>
				<Event
					img="/2_21_21.jpg"
					title="Live Coding Session: React + Firebase"
					date="Feb 21, 2021"
					url="https://www.youtube.com/watch?v=IJxaRsUtY-8"
				/>
			</Wrapper>
		</Container>
	);
}
