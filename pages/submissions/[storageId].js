import styled from '@emotion/styled';
import { getSubmission, getSubmissions } from '../../lib';
import { useRouter } from 'next/router';
import Submission from '../../components/atoms/Submission';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export default function ReviewSubmission({ submission }) {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <Container>{submission.title}</Container>;
}

export async function getStaticPaths() {
	const data = await getSubmissions();
	const paths = data.map((el) => ({
		params: { storageId: el.storageId },
	}));

	return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
	const submission = await getSubmission(params.storageId);
	return { props: { submission }, revalidate: 900 };
}
