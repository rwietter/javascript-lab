import React from 'react'
import styled from 'styled-components'

export default function Props() {
  return (
    <div>
      <h3>----------- PROPS EXEMPLE -----------</h3>
      <BUTTON>Click One</BUTTON>
      <BUTTON small>Click Two</BUTTON>
    </div>
  )
}

const BUTTON = styled.button`
    width: ${props => props.small ? '8rem' : '5rem'};
    height: 2rem;
    outline: 0;
    cursor: pointer;
    background: rgba(229, 78, 30, 1);
    color: rgb(260, 260, 260);
    border: 0;
    border-radius: 0.5rem;
    margin: 1rem;

    &:hover {
        background: rgba(229, 78, 30, 0.7);
    }
`