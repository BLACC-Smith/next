import oAuth2Client from '../../lib/authConfig';

const scopes = 'https://www.googleapis.com/auth/youtube.upload';

export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(200).json({ error: 'Must send a POST request' });
	}
	const { body } = req;

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
