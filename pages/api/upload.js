import axios from 'axios';
import { getAccessToken } from '../../lib';

const { google } = require('googleapis');
const { default: oAuth2Client } = require('../../lib/authConfig');

/**
 * @description this route recieves the youtube submission
 * and sends the video and its metadata to the Youtube Data v3 Api
 * to upload.
 */
export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(200).json({ error: 'Must send a POST request' });
		return;
	}

	const { submission } = req.body;
	const { access_token } = await getAccessToken();

	try {
		console.log({ API_KEY: process.env.GOOGLE_API_KEY });
		const { data } = await axios.post(
			`https://youtube.googleapis.com/youtube/v3/videos?key=${process.env.GOOGLE_API_KEY}`,
			{
				part: 'snippet,status',
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
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);
		console.log({ data });
	} catch (error) {
		console.log({ uploadApi: error });
	}
	res.status(200).json({ status: 'Ok' });
};

/**
 * @description oAuth2 Implementation
 */
// const youtube = google.youtube({ version: 'v3', auth: oAuth2Client });
// youtube.videos.insert(
// 	{
// 		part: 'snippet,status',
// 		requestBody: {
// 			snippet: {
// 				title: submission.title,
// 				description: submission.description,
// 				tags: submission.tags,
// 			},
// 			status: { privacyStatus: 'public' },
// 		},
// 		media: { body: submission.video },
// 	},
// 	(err, data) => {
// 		if (err) throw err;
// 		console.log('uploading video done');
// 		res.status(200).json({ status: 'Successfully uploaded video', data });
// 	}
// );
