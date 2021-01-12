import { firestore } from '../../lib/config';

/**
 * @description this route receives the tokens
 * and stores them in firebase, in case we need them.
 */
export default async (req, res) => {
	if (req.method !== 'POST') {
		res.status(200).json({ error: 'Must send a POST request' });
		return;
	}
	console.log({ body: req.body });
	await firestore.collection('tokens').doc('private').set(req.body);
	res.status(200).json({ status: 'Saved refresh token' });
};
