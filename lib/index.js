const { firestore } = require('./config');

export const getSubmissions = () => {
	const submissions = firestore
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
