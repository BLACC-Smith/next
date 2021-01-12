import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/atoms/Header';
import { getSubmissions } from '../lib';
import Submission from '../components/atoms/Submission';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContext';
import { useRouter } from 'next/router';
const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
`;
const SubmissionWrapper = styled.div`
	padding: 24px 0 90px 0;
	z-index: 1;
	height: 100%;
	overflow-y: scroll;
`;

export default function Home({ submissions }) {
	const { updateAccessToken } = useContext(MainContext);
	const router = useRouter();

	useEffect(() => {
		if (router.asPath.length > 2) {
			updateAccessToken(router.asPath.split('&')[1].split('=')[1]);
		}
	}, []);
	return (
		<>
			<Head>
				<title>Youtube Submissions</title>
			</Head>
			<Container>
				<Header />
				<SubmissionWrapper>
					{submissions.map((el, idx) => (
						<Submission
							key={idx}
							data={el}
							show={idx !== submissions.length - 1}
						/>
					))}
				</SubmissionWrapper>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const data = await getSubmissions();
	const submissions = data.map((el) => ({
		...el,
		createdAt: new Date(el.createdAt.seconds * 1000).toLocaleDateString(
			'en-US'
		),
	}));

	return { props: { submissions }, revalidate: 15 };
}
