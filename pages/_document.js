import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
					<meta name="msapplication-TileColor" content="#000000" />
					<meta
						name="description"
						content="BLACC (The Black Coder Community), a safe space for black people to exchange knowledge and to be exposed to new technologies."
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta
						property="og:title"
						content="BLACC, The Black Coder Community"
					/>
					<meta property="og:site_name" content="BLACC" />
					<meta property="og:url" content="https://blacc.xyz" />
					<meta
						property="og:description"
						content="BLACC (The Black Coder Community), a safe space for black people to exchange knowledge and to be exposed to new technologies."
					/>
					<meta property="og:type" content="article" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
