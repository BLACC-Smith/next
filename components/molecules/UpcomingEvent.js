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

const InlineCTA = styled.a`
	padding: ${({ inline }) => (inline ? '8px 16px' : ' 12px 24px')};
	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-size: 16px;
	background: #9147ff;
	font-weight: 600;
	margin-left: 12px;
	box-shadow: 2px 12px 24px rgba(145, 71, 255, 0.5);
	cursor: not-allowed;

	@media (max-width: 600px) {
		display: none;
	}
`;
const CTA = styled.a`
	padding: ${({ inline }) => (inline ? '8px 16px' : ' 12px 24px')};
	border-radius: 4px;
	display: none;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-size: ${({ inline }) => (inline ? '16px' : '24px')};
	background: #9147ff;
	font-weight: 600;
	box-shadow: 2px 12px 24px rgba(145, 71, 255, 0.5);
	cursor: not-allowed;

	@media (max-width: 600px) {
		margin-top: 16px;
		display: inline-flex;
	}
`;

const InlineSpan = styled.span`
	padding: ${({ inline }) => (inline ? '8px 16px' : ' 12px 24px')};
	border-radius: 4px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-size: 16px;
	background: #9147ff;
	font-weight: 600;
	margin-left: 12px;
	box-shadow: 2px 12px 24px rgba(145, 71, 255, 0.5);
	cursor: not-allowed;

	@media (max-width: 600px) {
		display: none;
	}
`;
const Span = styled.span`
	padding: ${({ inline }) => (inline ? '8px 16px' : ' 12px 24px')};
	border-radius: 4px;
	display: none;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-size: ${({ inline }) => (inline ? '16px' : '24px')};
	background: #9147ff;
	font-weight: 600;
	box-shadow: 2px 12px 24px rgba(145, 71, 255, 0.5);
	cursor: not-allowed;

	@media (max-width: 600px) {
		margin-top: 16px;
		display: inline-flex;
	}
`;

export default function UpcomingEvent() {
	return (
		<Container>
			<LeftContainer>
				<div style={{ display: 'flex' }}>
					<Title>Past Events</Title>
					{/* <InlineSpan inline data-tooltip="This event hasn't started yet">
						JOIN EVENT
					</InlineSpan> */}
					{/* <InlineCTA
						inline
						href="https://www.twitch.tv/blacc_xyz"
						target="_blank"
					>
						JOIN EVENT
					</InlineCTA> */}
				</div>
				<Undraw src="/undraw_events.png" layout="fill" objectFit="contain" />
				{/* <CTA href="https://www.twitch.tv/blacc_xyz" target="_blank">
					JOIN EVENT
				</CTA> */}
				{/* <Span data-tooltip="This event hasn't started yet">JOIN EVENT</Span> */}
			</LeftContainer>
			<RightContainer>
				<BoringImg src="/event.png" layout="fill" objectFit="contain" />
			</RightContainer>
		</Container>
	);
}
