import firebase, { firestore, storage } from './config';
import { v4 as uuidv4 } from 'uuid';

export const uploadVideoToStorage = ({
	video,
	title,
	username,
	description,
	chosenTags,
}) => {
	console.log({ bL: video.byteLength });
	try {
		const storageId = uuidv4();
		const submissionsRef = storage.ref(`youtubeSubmissions/${storageId}`);
		const uploadTask = submissionsRef.put(video, {
			customMetadata: { username, title },
		});
		// uploadTask.on(
		// 	'state_changed',
		// 	() => {},
		// 	(err) => {
		// 		throw new Error(`createChallenge: ${err.toString()}`);
		// 	},
		// 	() => {
		// 		uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
		// 			firestore
		// 				.collection('youtubeSubmissions')
		// 				.add({
		// 					title,
		// 					storageId,
		// 					description,
		// 					tags: chosenTags,
		// 					video: downloadURL,
		// 					createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		// 				})
		// 				.catch((err) => {
		// 					throw new Error(`createChallenge: ${err.toString()}`);
		// 				});
		// 		});
		// 	}
		// );
	} catch (error) {
		throw new Error(`uploadVideoToStorage: ${error.toString()}`);
	}
};
