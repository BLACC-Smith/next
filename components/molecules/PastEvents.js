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

export default function PastEvents() {
	return (
		<Container>
			<Title>Past Events</Title>
			<Event
				img="/2_21_21.jpg"
				title="Live Coding Session: React + Firebase"
				date="Feb 21, 2021"
				url="https://www.youtube.com/watch?v=IJxaRsUtY-8"
			/>
		</Container>
	);
}
