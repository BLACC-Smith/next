import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	z-index: 30;
`;
const Container = styled.div`
	display: flex;
	z-index: 30;
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

	@media (max-width: 600px) {
		display: none;
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

	@media (max-width: 600px) {
		display: none;
	}
`;

const MenuIcon = styled.span`
	color: #fff;
	font-size: 28px;
	padding: 6px;
	border-radius: 4px;
	border: 1px solid #fff;
	transition: all 0.2s;
	cursor: pointer;
	display: none;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 600px) {
		display: block;
	}
`;
const MenuContainer = styled.div`
	width: 100%;
	background: #212121;
	display: none;
	padding: 8px;
	position: absolute;
	z-index: 10;
	transition: all 0.3s;
	transform-origin: top center;
	${({ show }) =>
		show
			? 'transform: translateY(0); opacity: 1;'
			: 'transform: translateY(-5%);opacity: 0;z-index:-1'};

	@media (max-width: 600px) {
		display: block;
	}
`;
const MenuItem = styled.div`
	display: flex;
	padding: 12px;
	user-select: none;
	outline: none;
	border-radius: 6px;
	margin-bottom: 6px;
	justify-content: flex-start;
	align-items: center;
	background: ${({ active }) =>
		active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};

	&:hover {
		background: rgba(255, 255, 255, 0.05);
	}
`;
const ExternalMenuItem = styled.a`
	display: flex;
	padding: 12px;
	border-radius: 6px;
	margin-bottom: 6px;
	justify-content: flex-start;
	align-items: center;
	background: ${({ active }) =>
		active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};

	&:hover {
		background: rgba(255, 255, 255, 0.05);
	}
`;
const Icon = styled.span`
	font-size: 24px;
	line-height: 28px;
	color: #fff;
`;
const MenuLabel = styled.p`
	font-size: 24px;
	font-weight: 400;
	margin-left: 16px;
	border-radius: 6px;
	color: #eeeeee;
	cursor: pointer;
	transition: all 0.25s;
`;
const Img = styled.div`
	border-radius: 4px;
	padding: 4px;
	background: rgba(255, 255, 255, 1);
`;

export default function Header() {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		setShowMenu(false);
	}, [router]);

	return (
		<Wrapper>
			<Container>
				<Link href="/">
					<Brand>
						<BoringImg
							src="/blacc.png"
							alt="BLACC logo"
							width="69"
							height="69"
						/>
						<Name>BLACC</Name>
					</Brand>
				</Link>
				<Links>
					<Link href="/live">
						<LinkItem active={router.route === '/live'}>Live Events</LinkItem>
					</Link>
					<ExternalLink
						href="https://github.com/BLACC-Smith"
						target="_blank"
						hide
					>
						<LinkItem>Contribute</LinkItem>
					</ExternalLink>
					<ExternalLink
						href="https://www.buymeacoffee.com/blacc"
						target="_blank"
						active
					>
						<Image src="/bmc.png" width="20" height="29" />
					</ExternalLink>
					<MenuIcon
						className="material-icons"
						onClick={() => setShowMenu(!showMenu)}
					>
						menu
					</MenuIcon>
				</Links>
			</Container>
			<MenuContainer show={showMenu}>
				<Link href="/">
					<MenuItem
						active={router.route === '/'}
						onClick={(e) => !showMenu && e.preventDefault()}
					>
						<Icon className="material-icons">home</Icon>
						<MenuLabel>Home</MenuLabel>
					</MenuItem>
				</Link>
				<Link href="/live">
					<MenuItem
						active={router.route === '/live'}
						onClick={(e) => !showMenu && e.preventDefault()}
					>
						<Icon className="material-icons">live_tv</Icon>
						<MenuLabel>Live Events</MenuLabel>
					</MenuItem>
				</Link>
				<ExternalMenuItem
					onClick={(e) => !showMenu && e.preventDefault()}
					href="https://github.com/BLACC-Smith"
					target="_blank"
				>
					<Icon className="material-icons">workspaces</Icon>
					<MenuLabel>Contribute</MenuLabel>
				</ExternalMenuItem>
				<ExternalMenuItem
					onClick={(e) => !showMenu && e.preventDefault()}
					href="https://www.buymeacoffee.com/blacc"
					target="_blank"
				>
					<Img>
						<Image src="/bmc.png" width="18" height="24" />
					</Img>
					<MenuLabel>Support</MenuLabel>
				</ExternalMenuItem>
			</MenuContainer>
		</Wrapper>
	);
}
