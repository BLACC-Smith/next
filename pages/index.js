import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/atoms/Header';

const Container = styled.main`
	background: #000;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

export default function Home() {
	return (
		<Container>
			<Head>
				<title>BLACC</title>
			</Head>
			<Header />
		</Container>
	);
}
