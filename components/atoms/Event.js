import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.2);
	padding: 16px;
	display: flex;
	position: relative;
	user-select: none;
	justify-content: flex-start;
	align-items: flex-start;
	max-width: 1500px;
	margin: 1.5em auto;

	@media (max-width: 600px) {
		padding: 0px;
		display: block;
	}
`;
const Img = styled.div`
	width: 240px;
	height: 180px;
	border-radius: 16px;
	overflow: hidden;
	position: relative;

	@media (max-width: 600px) {
		width: 100%;
		border-radius: 6px;
	}
`;
const Details = styled.div`
	margin-left: 32px;
	height: 100%;
	display: grid;
	position: relative;
	grid-template-rows: 1fr 1fr;

	@media (max-width: 600px) {
		padding: 8px;
		margin-left: 0;
		margin-top: 12px;
	}
`;
const Title = styled.p`
	font-size: 32px;
	font-weight: 500;
	color: #fafafa;

	@media (max-width: 600px) {
		font-size: 24px;
	}
`;
const Date = styled.p`
	font-size: 20px;
	font-weight: 400;
	color: #eeeeee;
	margin-top: 12px;
`;
const Metadata = styled.div`
	@media (max-width: 600px) {
		padding: 0 6px;
	}
`;
const CTA = styled.a`
	border-radius: 8px;
	padding: 16px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	align-self: flex-end;
	color: #fafafa;
	font-size: 18px;
	font-weight: 500;
	width: max-content;
	transition: all 0.2s;
	background: rgba(0, 0, 0, 0.2);

	&:hover {
		border: 1px solid #fafafa;
	}

	@media (max-width: 600px) {
		width: 100%;
		text-align: center;
	}
`;

export default function Event({ img, title, date, url, live }) {
	return (
		<Container>
			<Img>
				<Image src={img} layout='fill' objectFit='cover' />
			</Img>
			<Details>
				<Metadata>
					<Title>{title}</Title>
					{url && <Date>{date}</Date>}
				</Metadata>
				{!url ? (
					<CTA>{date}</CTA>
				) : !live ? (
					<CTA href={url} target='_blank'>
						VIEW RECORDING
					</CTA>
				) : (
					<CTA href={url} target='_blank'>
						WATCH LIVE
					</CTA>
				)}
			</Details>
		</Container>
	);
}
