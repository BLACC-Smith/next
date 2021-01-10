import Head from 'next/head';
import { useState } from 'react';
import styled from '@emotion/styled';
import VideoContainer from '../components/molecules/VideoContainer';
import FormSubmission from '../components/molecules/FormSubmission';
import Toast from '../components/atoms/Toast';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: relative;
`;
const YoutubeUI = ({
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
			</Container>
		</>
	);
};
export default function Youtube() {
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
	const uploadSubmission = () => {
		if (validateInputs()) {
			console.log({
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
		<YoutubeUI
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
