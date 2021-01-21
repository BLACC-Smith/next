import oAuth2Client from '../../../lib/authConfig';

export const config = {
	api: {
		externalResolver: true,
	},
};

/**
 * @description this route receives an auth code from the
 * auth url after successful sign in. We set the credentials
 * for the oAuth2 client and send back those tokens.
 */
export default async (req, res) => {
	const { code } = req.body;
	if (!code) res.json({ error: 'No code was retrieved from the request.' });

	try {
		oAuth2Client.getToken(code, (err, tokens) => {
			if (err) throw err;
			console.log('successfully authenticated');
			oAuth2Client.setCredentials(tokens);
			res.status(200).json({ status: 'Success', tokens });
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};
