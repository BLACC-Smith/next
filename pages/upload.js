import Head from 'next/head';
import { useState } from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../components/molecules/VideoContainer';
import FormSubmission from '../components/molecules/FormSubmission';
import Toast from '../components/atoms/Toast';
import { uploadVideoToStorage } from '../lib';

const Container = styled.div`
	// display: grid;
	// grid-template-columns: 1fr 1fr;
	// justify-items: center;
	// align-items: center;
	background: #fff;
	overflow: hidden;
	width: 100vw;
	height: calc(100vh - 117px);
	position: relative;
`;
const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	padding-bottom: 24px;
`;

const UploadUI = ({
	error,
	title,
	video,
	setTitle,
	username,
	setUsername,
	setVideo,
	showSuccess,
	progress,
	chosenTags,
	description,
	setChosenTags,
	setDescription,
	uploadSubmission,
}) => {
	return (
		<>
			<Head>
				<title>Upload Your Submission</title>
			</Head>
			<Container>
				<Toast error={error} show={showSuccess} isError={error} />
				<Wrapper>
					<VideoContainer video={video} setVideo={setVideo} />
					<FormSubmission
						title={title}
						setTitle={setTitle}
						username={username}
						setUsername={setUsername}
						progress={progress}
						chosenTags={chosenTags}
						description={description}
						onSubmit={uploadSubmission}
						setChosenTags={setChosenTags}
						setDescription={setDescription}
					/>
				</Wrapper>
			</Container>
		</>
	);
};
export default function Upload() {
	const [video, setVideo] = useState(null);
	const [username, setUsername] = useState('');
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');
	const [progress, setProgress] = useState(0);
	const [description, setDescription] = useState('');
	const [chosenTags, setChosenTags] = useState([]);
	const [showSuccess, setShowSuccess] = useState(false);

	const clearData = () => {
		setVideo(null);
		setTitle('');
		setUsername('');
		setProgress(0);
		setDescription('');
		setChosenTags([]);
		setShowSuccess(true);
		setTimeout(() => setShowSuccess(false), 3000);
	};
	const validateInputs = () => {
		if (!chosenTags.length) setError('You must add at least one tag');
		if (!description) setError('You must add a description for the video');
		if (!title) setError('You must add a video title');
		if (!username) setError('You must add your Discord username');
		if (!video) setError('You must upload a video');
		setTimeout(() => setError(''), 5000);
		return video && username && title && description && chosenTags.length;
	};
	const uploadSubmission = async () => {
		if (validateInputs()) {
			uploadVideoToStorage({
				video,
				username,
				title,
				description,
				chosenTags,
				updateProgress: setProgress,
				onComplete: clearData,
			});
		}
	};

	return (
		<UploadUI
			title={title}
			setTitle={setTitle}
			username={username}
			setUsername={setUsername}
			video={video}
			setVideo={setVideo}
			progress={progress}
			chosenTags={chosenTags}
			description={description}
			uploadSubmission={uploadSubmission}
			setChosenTags={setChosenTags}
			error={error}
			showSuccess={showSuccess}
			setDescription={setDescription}
		/>
	);
}
