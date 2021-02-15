import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	z-index: 5;
	width: 100%;
	background: rgba(0, 0, 0, 0.65);
	backdrop-filter: blur(20px);
	padding: 24px 48px;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 600px) {
		padding: 24px;
	}
`;
const Brand = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const Name = styled.p`
	color: #fff;
	font-size: 32px;
	letter-spacing: 3px;
	font-weight: 500;

	@media (max-width: 600px) {
		display: none;
	}
`;

const DiscordCTA = styled.a`
	padding: 24px 36px;
	background: #000;
	font-weight: 600;
	cursor: pointer;
	color: #fff;
	border-radius: 4px;
	transition: all 0.2s;
	border: 1px solid #fff;
	:hover {
		color: #000;
		background: #fff;
	}

	@media (max-width: 600px) {
		padding: 16px;
	}
`;

const BoringImg = styled.img`
	border-radius: 50px;
	margin-right: 12px;
`;

export default function Header() {
	return (
		<Container>
			<Brand>
				<BoringImg src="/blacc.png" alt="BLACC logo" width="69" height="69" />
				<Name>BLACC</Name>
			</Brand>
			<DiscordCTA href="https://discord.gg/9Bh3TZ2">
				Join our community
			</DiscordCTA>
		</Container>
	);
}
