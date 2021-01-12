import styled from '@emotion/styled';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CTA = styled.p`
	padding: 8px 16px;
	border-radius: 4px;
	background: #000;
	color: #fff;
	cursor: pointer;
`;

export default () => {
	const { user } = useContext(MainContext);
	const login = () => {
		window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=758861764166-8f0pg51jrka1d70hjed9h6mmlfrmpabf.apps.googleusercontent.com&redirect_uri=http://localhost:3001/&state=security_token&response_type=token&scope=https://www.googleapis.com/auth/youtube.force-ssl`;
	};
	return (
		<Container>
			<CTA onClick={login}>Log in</CTA>
		</Container>
	);
};
