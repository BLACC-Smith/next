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
				img='/twitch.PNG'
				title='👩🏾‍Building with the Twitch API and Github Actions'
				date='May 8th, 2021'
				url='https://www.twitch.tv/blacc_xyz'
				live
			/>
		</Container>
	);
}
