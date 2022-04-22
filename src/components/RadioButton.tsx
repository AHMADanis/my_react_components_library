import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	padding: 0px 16px 24px 16px;
	box-sizing: border-box;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 12px;
	justify-items: center;
`;

const Item = styled.div`
	display: flex;
	align-items: end;
	max-height: 80px;
	max-width: 500px;
	position: relative;
	transition: all 150ms;
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	border-radius: 6px;
	margin-bottom: 12px;
	${(props) =>
		props.active &&
		`
  border: 1px solid #0957c3;
  `}
`;

const Tag = styled.div`
	position: relative;
	top: 9px;
	color: #0957c3;
	text-align: center;
	text-transform: uppercase;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	width: 20px;
	height: 20px;
	border-radius: 10%;
	border: 1px solid #0957c3;
	margin-right: 10px;
`;

const Details = styled.h2`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
`;

const Title = styled.h1`
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	margin-top: 0px;
`;

const RadioButtonLabel = styled.label`
	position: absolute;
	top: 24px;
	left: 24px;
	width: 18px;
	height: 18px;
	border-radius: 10%;
	background: transparent;
	border: 1px solid #dbdbdb;
`;
const RadioButton = styled.input`
	opacity: 0;
	position: absolute;
	z-index: 1;
	cursor: pointer;
	width: 100%;
	height: 100%;
	margin-right: 0px;
	&:hover ~ ${RadioButtonLabel} {
		background: #dbdbdb;
		&::after {
			content: '\f00c';
			font-family: 'FontAwesome';
			display: block;
			color: white;
			width: 6px;
			height: 6px;
			margin: 1px;
		}
	}
	&:checked + ${RadioButtonLabel} {
		background: #0957c3;
		border: 1px solid #0957c3;
		&::after {
			content: '\f00c';
			font-family: 'FontAwesome';
			display: block;
			color: white;
			width: 6px;
			height: 6px;
			margin: 2px;
			font-size: 14px;
		}
	}
`;

const RadioBtn = () => {
	const [select, setSelect] = useState('');

	const handleSelectChange = (event) => {
		const value = event.target.value;
		setSelect(value);
	};
	return (
		<Wrapper>
			<Item active={select === 'option2'}>
				<RadioButton
					type="radio"
					name="radio"
					value="option2"
					checked={select === 'option2'}
					onChange={(event) => handleSelectChange(event)}
				/>
				<Container>
					<Tag>A</Tag>
					<Details>
						This is the recommended method because it is the fastest and most
					</Details>
				</Container>
			</Item>
			<Item active={select === 'optionB'}>
				<RadioButton
					type="radio"
					name="radio"
					value="optionB"
					checked={select === 'optionB'}
					onChange={(event) => handleSelectChange(event)}
				/>
				<Container>
					<Tag>A</Tag>
					<Details>
						This is the recommended method because it is the fastest and most
					</Details>
				</Container>
			</Item>
		</Wrapper>
	);
};

export default RadioBtn;
