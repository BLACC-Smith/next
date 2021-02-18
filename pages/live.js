import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Live() {
	const container = useRef(null);
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (container?.current) {
			setHeight(container.current.offsetWidth);
			setWidth(container.current.offsetWidth);
		}
	}, [container]);

	return (
		<Container id="hi" ref={container}>
			{!width || !height ? (
				<p>Loading</p>
			) : (
				<iframe
					src="https://embed.restream.io/player/index.html?token=e2022a75ef752141417cf11887150a39"
					width={width}
					height={height}
					frameBorder="0"
					allowFullScreen
				/>
			)}
		</Container>
	);
}
