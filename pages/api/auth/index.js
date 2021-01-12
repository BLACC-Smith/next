const { google } = require('googleapis');
const OAuth2Data = require('../../../credentials.json');

const scopes = 'https://www.googleapis.com/auth/youtube.upload';

export default async (req, res) => {
	if (req.method !== 'GET') {
		res.status(200).json({ error: 'Must send a GET request' });
	}

	const CLIENT_ID = OAuth2Data.web.client_id;
	const CLIENT_SECRET = OAuth2Data.web.client_secret;
	const REDIRECT_URL = OAuth2Data.web.redirect_uris[0];

	const oAuth2Client = new google.auth.OAuth2(
		CLIENT_ID,
		CLIENT_SECRET,
		REDIRECT_URL
	);

	// const authed = false;
	// if (!authed) {
	const url = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: scopes,
	});
	res.json({ url });
	// }
};
