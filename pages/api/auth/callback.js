import oAuth2Client from '../../../lib/authConfig';

export const config = {
	api: {
		externalResolver: true,
	},
};

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
