import styled from '@emotion/styled';
import axios from 'axios';

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

export default function Login() {
	const login = async () => {
		try {
			const { data } = await axios.get('/api/auth');
			window.location.href = data.url;
		} catch (error) {
			new Error(`{ login : ${error} }`);
		}
	};
	return (
		<Container>
			<CTA onClick={login}>Log in</CTA>
		</Container>
	);
}
