import Link from 'next/link';
import styled from '@emotion/styled';
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;
`;
const CTA = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 8px;
	border-radius: 6px;
	border: 1px solid #0277bd;
	position: absolute;
	cursor: pointer;
	top: 32px;
	left: 32px;
	transition: all 0.3s;
	:hover {
		background: #e1f5fe;
		border: 1px solid #e1f5fe;
	}
`;
const Icon = styled.i`
	font-size: 18px;
	color: #0277bd;
	margin-right: 12px;
`;
const CTAText = styled.p`
	font-size: 18px;
	line-height: 18px;
	color: #0277bd;
`;

export default function SubmissionWrapper({ children }) {
	return (
		<Container>
			<Link href="/">
				<CTA>
					<Icon className="material-icons">keyboard_backspace</Icon>
					<CTAText>All Submissions</CTAText>
				</CTA>
			</Link>
			{children}
		</Container>
	);
}
