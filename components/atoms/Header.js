import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

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
	cursor: pointer;
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

const BoringImg = styled.img`
	border-radius: 50px;
	margin-right: 12px;
`;
const Links = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > * {
		margin-left: 16px;
	}
`;
const LinkItem = styled.p`
	font-size: 18px;
	font-weight: 400;
	padding: 12px;
	border-radius: 6px;
	color: #eeeeee;
	cursor: pointer;
	transition: all 0.25s;
	background: ${({ active }) =>
		active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
	&:hover {
		background: rgba(255, 255, 255, 0.2);
	}
`;
const ExternalLink = styled.a`
	max-height: 45px;
	${({ active }) =>
		!active
			? ''
			: `
			padding: 8px 12px;
			background:rgba(255, 255, 255, 15);
			border-radius: 6px;`}
`;

export default function Header() {
	const router = useRouter();

	return (
		<Container>
			<Link href="/">
				<Brand>
					<BoringImg src="/blacc.png" alt="BLACC logo" width="69" height="69" />
					<Name>BLACC</Name>
				</Brand>
			</Link>
			<Links>
				<Link href="/live">
					<LinkItem active={router.route === '/live'}>Live Events</LinkItem>
				</Link>
				<ExternalLink href="https://github.com/BLACC-Smith" target="_blank">
					<LinkItem>Contribute</LinkItem>
				</ExternalLink>
				<ExternalLink
					href="https://www.buymeacoffee.com/blacc"
					target="_blank"
					active
				>
					<Image src="/bmc.png" width="20" height="29" />
				</ExternalLink>
			</Links>
		</Container>
	);
}
