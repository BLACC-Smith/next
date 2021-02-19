import '../styles/globals.css';
import styled from '@emotion/styled';
import Header from '../components/atoms/Header';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: #000;
	position: relative;
`;

function MyApp({ Component, pageProps }) {
	return (
		<Wrapper>
			<Header />
			<Component {...pageProps} />
		</Wrapper>
	);
}

export default MyApp;
