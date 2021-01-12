import oAuth2Client from '../../../lib/authConfig';

export default async (req, res) => {
	const code = req.query.code;
	if (!code) res.json({ status: 'Error' });

	oAuth2Client.getToken(code, (err, tokens) => {
		if (err) throw err;
		console.log('successfully authenticated');
		oAuth2Client.setCredentials(tokens);
	});
	res.redirect('/');
	// res.json({ status: 'Success', code });
};
