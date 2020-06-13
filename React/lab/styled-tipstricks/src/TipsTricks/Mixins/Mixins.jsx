import React from 'react';
import styled, { css } from 'styled-components'

export default function Mixins() {
  return (
    <>
      <h3>----------- MIXIN EXEMPLE -----------</h3>
      <Box>
        <h3>Hello, World!</h3>
      </Box>
    </>
  )
}

const mixin = {
  handled: (...args) => css`
    @media(max-width: 460px){
      ${css(...args)}
    }
  `
}

const Box = styled.div`
  font-size: 2rem;
  ${mixin.handled`
    font-size: 16px;
    color: rgba(178, 141, 39, 1)
  `}
`