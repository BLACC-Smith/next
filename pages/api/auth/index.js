const { google } = require('googleapis');
const OAuth2Data = require('../../../credentials.json');

/**
 * @description this route initializes the oAuth2 node.js client
 * and sends back the auth url for us to sign in.
 */
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

	const url = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: 'https://www.googleapis.com/auth/youtube.upload',
	});
	res.json({ url });
};
