import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
	position: sticky;
	top: 0;
	z-index: 5;
	padding: 24px;
	background: #fff;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 10px 20px #c8c8c8;
`;
const Title = styled.p`
	font-size: 36px;
	font-weight: #212121;
	font-weight: 600;
`;
const CTA = styled.p`
	padding: 8px 16px;
	font-siz: 14px;
	color: #212121;
	border-radius: 8px;
	background: #e0e0e0;
	cursor: pointer;
`;

const Header = ({ logout }) => {
	return (
		<Container>
			<Title>Dashboard</Title>
			<Link href="/login">
				<CTA onClick={logout}>Logout</CTA>
			</Link>
		</Container>
	);
};

export default Header;
