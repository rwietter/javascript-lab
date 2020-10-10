import React from 'react'
import styled from 'styled-components';

export default function FunctionStyled() {
	return (
		<div>
			<h3>----------- FUNCTION EXEMPLE -----------</h3>
			<H1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</H1>
		</div>
	)
}

const truncate = (width) => {
	return `
    width: ${width};
 		white-space: nowrap;
  	overflow: hidden;
  	text-overflow: ellipsis;
  `
}

const H1 = styled.div`
	${truncate('20rem')};
	font-size: 1rem;
	color: #000000;
`