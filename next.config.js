module.exports = {
	async redirects() {
		return [
			{
				source: '/discord',
				destination: 'https://discord.gg/9Bh3TZ2',
				permanent: true,
			},
		];
	},
};
