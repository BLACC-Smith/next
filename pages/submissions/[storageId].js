import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getSubmission, getSubmissions } from '../../lib';
import SubmissionWrapper from '../../components/atoms/SubmissionWrapper';
import axios from 'axios';
import { MainContext } from '../../context/MainContext';

const Card = styled.div`
	background: #fff;
	border-radius: 26px;
	box-shadow: 0 20px 40px #c8c8c8;
	max-height: 75%;
	width: 65%;
	overflow-y: scroll;
	max-width: 650px;
	padding: 24px 24px 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	transition: all 0.15s ease-in-out;
	opacity: ${(show) => (show ? 1 : 0)};
	transform: ${(show) =>
		show ? 'translateY(0%) scale(1)' : ' translateY(100%) scale(.5)'};
`;
const Video = styled.video`
	border-radius: 16px;
	object-fit: cover;
	width: 100% !important;
	height: auto !important;
`;
const Title = styled.p`
	margin-top: 16px;
	font-weight: 700;
	color: #212121;
	width: 100%;
	font-size: 32px;
`;
const Description = styled.p`
	margin: 16px 0;
	font-weight: 400;
	color: #525456;
	font-size: 18px;
	max-height: 100px;
	width: 100%;
	overflow-y: scroll;
`;
const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	overflow-y: scroll;
`;
const Tag = styled.p`
	padding: 12px 16px;
	font-size: 12px;
	cursor: pointer;
	border-radius: 30px;
	margin-bottom: 6px;
	margin-right: 8px;
	background: #000;
	color: #fff;
`;

const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background: linear-gradient(transparent, #fff);
	position: sticky;
	z-index: 20;
	bottom: 0;
	padding: 12px 0;
`;

const CTA = styled.p`
	padding: 16px;
	background: ${({ bg }) => bg};
	color: ${({ color }) => color};
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	border-radius: 50px;
`;
const MetadataContainer = styled.div`
	padding-bottom: 51;
	z-index: 15;
`;

const ReviewSubmissionUI = ({ show, submission, publish }) => {
	return (
		<SubmissionWrapper>
			<Card show={false}>
				<MetadataContainer>
					<Video width="100%" controls src={submission.video} />
					<Title>{submission.title}</Title>
					<Description>{submission.description}</Description>
					<TagsContainer>
						{submission.tags.map((el, idx) => (
							<Tag key={idx}>{el}</Tag>
						))}
					</TagsContainer>
				</MetadataContainer>
				<Footer>
					<CTA color="#000" bg="#fff">
						CANCEL
					</CTA>
					<CTA color="#fff" bg="#000" onClick={publish}>
						PUBLISH
					</CTA>
				</Footer>
			</Card>
		</SubmissionWrapper>
	);
};
export default function ReviewSubmission({ submission }) {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const { accessToken } = useContext(MainContext);

	useEffect(() => {
		setTimeout(() => setShow(true), 3000);
	}, []);

	const publishToYoutube = async () => {
		try {
			const { data } = await axios.post('/api/upload', { submission });
			console.log({ data });
		} catch (error) {
			new Error(`{ publishToYoutube : ${error} }`);
		}
	};

	return router.isFallback ? (
		<div>Loading...</div>
	) : (
		<ReviewSubmissionUI
			show={show}
			submission={submission}
			publish={publishToYoutube}
		/>
	);
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
	return { props: { submission }, revalidate: 15 };
}
