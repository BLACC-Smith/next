import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 24px 48px;
	justify-content: space-between;
	align-items: center;
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
`;

export default function Header() {
	return (
		<Container>
			<Brand>
				<Image
					src="/blacc.png"
					alt="BLACC logo"
					width="69"
					height="69"
					objectFit="contain"
				/>
				<Name>BLACC</Name>
			</Brand>
			<DiscordCTA href="https://discord.gg/9Bh3TZ2">
				Join our community
			</DiscordCTA>
		</Container>
	);
}
