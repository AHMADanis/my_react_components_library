import styled from 'styled-components';

const Wrapper = styled.div`
	border: 1px solid #333;
	background-color: #f5f5f5;
	padding: 10px;
	position: relative;
`;

const Header = styled.div`
	background-color: #6289ae;
	margin-bottom: 10px;
	height: 100px;
	padding: 10px;
	position: relative;
`;

const Bottom = styled.a`
	position: absolute;
	bottom: 10px;
`;
const Top = styled.a`
	position: absolute;
	top: 10px;
`;

const Sidebar = styled.div`
	position: absolute;
	padding: 10px;
	background-color: #ccc;
	height: 300px;
	width: 100px;
	float: left;
`;

const Main = styled.div`
	background-color: #ccc;
	height: 600px;
	margin-left: 110px;
	padding: 10px;
	position: relative;
`;

const Clear = styled.div`
	clear: both;
	float: none;
`;

const Footer = styled.div`
	background-color: #6289ae;
	margin-top: 10px;
	height: 250px;
	padding: 10px;
	position: relative;
`;

export default function Expenses() {
	return (
		<Wrapper>
			<Header>
				{' '}
				<Top>Header top</Top>
				<Bottom>Header Bottom</Bottom>
			</Header>
			<div>
				<Sidebar>
					{' '}
					<Top>side top</Top>
					<Bottom>Side Bottom</Bottom>
				</Sidebar>
				<Main>
					{' '}
					<Top>Main top</Top>
					<Bottom>Main bottom</Bottom>
				</Main>
				<Clear></Clear>
			</div>
			<Footer>
				{' '}
				<Top>footer top</Top>
				<Bottom>footer bottom</Bottom>
			</Footer>
		</Wrapper>
	);
}
