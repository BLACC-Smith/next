import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.2);
	padding: 16px;
	display: flex;
	user-select: none;
	justify-content: flex-start;
	align-items: center;
	max-width: 1500px;
	margin: auto;
`;
const Img = styled.div`
	width: 240px;
	height: 180px;
	border-radius: 16px;
	overflow: hidden;
	position: relative;
`;
const Details = styled.div`
	margin-left: 32px;
	height: 100%;
	display: grid;
	position: relative;
	grid-template-rows: 1fr 1fr;
`;
const Title = styled.p`
	font-size: 32px;
	font-weight: 500;
	color: #fafafa;
`;
const Date = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: #eeeeee;
	margin-top: 12px;
`;
const Metadata = styled.div``;
const CTA = styled.a`
	border: 1px solid #fafafa;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	align-self: flex-end;
	color: #fafafa;
	font-size: 18px;
	width: max-content;
	transition: all 0.2s;

	&:hover {
		background: #fafafa;
		color: #212121;
	}
`;

export default function Event({ img, title, date, url }) {
	return (
		<Container>
			<Img>
				<Image src={img} layout="fill" objectFit="cover" />
			</Img>
			<Details>
				<Metadata>
					<Title>{title}</Title>
					<Date>{date}</Date>
				</Metadata>
				<CTA href={url} target="_blank">
					VIEW RECORDING
				</CTA>
			</Details>
		</Container>
	);
}
