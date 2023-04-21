import React from 'react';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  padding: 10px;
  border: 6px solid #1976d2;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  margin: 0 auto;
  `


function Loader() {
    return <Loading />
}

export default Loader;