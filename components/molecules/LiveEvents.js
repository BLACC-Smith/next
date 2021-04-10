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

export default function LiveEvents() {
	return (
		<Container>
			<Title>Upcoming Events</Title>
			<Event
				img='/4_10_21.png'
				title='🎙 Whiteness in Digital Products'
				date='Apr 10, 2021'
				url='https://www.youtube.com/watch?v=PSXEQ4X5T20&ab_channel=BLACCSmith'
			/>
		</Container>
	);
}
