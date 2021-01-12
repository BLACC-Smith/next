const { google } = require('googleapis');
const oAuth2Client = require('../../lib/authConfig');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('video');

export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(200).json({ error: 'Must send a POST request' });
	}

	upload(req, res, (err) => {
		if (err) throw err;
		const { submission } = req.body;

		const youtube = google.youtube({ version: 'v3', auth: oAuth2Client });
		youtube.videos.insert(
			{
				requestBody: {
					snippet: {
						title: submission.title,
						description: submission.description,
						tags: submission.tags,
					},
					status: { privacyStatus: 'public' },
				},
				media: { body: submission.video },
			},
			(err, data) => {
				if (err) throw err;
				console.log('uploading video done');
				res.status(200).json({ status: 'Successfully uploaded video', data });
			}
		);
	});
	res.status(200).json({ status: 'Ok' });

	// try {
	// 	const { data } = await axios.post(
	// 		`https://www.googleapis.com/upload/youtube/v3/videos?part=topicDetails&autoLevels=true&notifySubscribers=true&key=${process.env.GOOGLE_API_KEY}`,
	// 		{
	// 			snippet: {
	// 				title: 'Summer vacation in California',
	// 				description: 'Had fun surfing in Santa Cruz',
	// 				tags: ['surfing', 'Santa Cruz'],
	// 				categoryId: '22',
	// 			},
	// 			status: { madeForKids: true, privacyStatus: 'private' },
	// 		},
	// 		{
	// 			headers: {
	// 				Accept: 'application/json',
	// 				Authorization: `Bearer ${body.accessToken}`,
	// 				'Content-Type': 'application/json',
	// 			},
	// 		}
	// 	);
	// 	console.log({ recievedData: data });
	// 	res.json({ message: 'received data' });
	// } catch (error) {
	// 	console.error({ error });
	// 	res.json({ error: error.toString() });
	// }
};
