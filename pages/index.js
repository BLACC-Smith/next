import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/atoms/Header';
import { getSubmissions } from '../lib';
import { useState } from 'react';
import Submission from '../components/atoms/Submission';
import ReviewModal from '../components/molecules/ReviewModal';

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
	const [selectedSubmission, setSelectedSubmission] = useState(null);
	return (
		<>
			<Head>
				<title>Youtube Submissions</title>
			</Head>
			<Container>
				<Header />
				{/* <ReviewModal
					data={selectedSubmission}
					onClose={() => setSelectedSubmission(null)}
				/> */}
				<SubmissionWrapper>
					{submissions.map((el, idx) => (
						<Submission
							key={idx}
							data={el}
							show={idx !== submissions.length - 1}
							onClick={setSelectedSubmission}
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

	return { props: { submissions }, revalidate: 900 };
}
