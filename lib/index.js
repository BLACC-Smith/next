const { firestore } = require('./config');

export const getSubmissions = async () => {
	const submissions = await firestore
		.collection('youtubeSubmissions')
		.orderBy('createdAt', 'desc')
		.get()
		.then(function (querySnapshot) {
			const data = [];
			querySnapshot.forEach(function (doc) {
				data.push(doc.data());
			});
			return data;
		});
	return submissions;
};
export const getSubmission = async (storageId) => {
	const submission = await firestore
		.collection('youtubeSubmissions')
		.where('storageId', '==', storageId)
		.get()
		.then(function (querySnapshot) {
			const data = [];
			querySnapshot.forEach(function (doc) {
				data.push({
					...doc.data(),
					createdAt: new Date(
						doc.data().createdAt.seconds * 1000
					).toLocaleDateString('en-US'),
				});
			});
			return data[0];
		});
	return submission;
};
