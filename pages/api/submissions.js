import { uploadVideoToStorage } from '../../lib';
import formidable from 'formidable';

export const config = {
	api: {
		bodyParser: false,
	},
};
export default (req, res) => {
	if (req.method !== 'POST') {
		res.status(200).json({ error: 'Must be a POST request' });
		return;
	}
	const form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		// console.log(err, fields, files);
		uploadVideoToStorage({ ...fields, video: files.video });
	});
	// uploadVideoToStorage(req.body);
	res.status(200).json({ data: 'Received request' });
};
