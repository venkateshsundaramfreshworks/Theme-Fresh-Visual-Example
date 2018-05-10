import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid ;
  background: ${props => props.primary ? 'palevioletred' : props.theme ? props.theme.main : 'white'};
  color: ${props => props.primary ? 'white' : props.theme ? props.theme.main : 'palevioletred'};
  font-size: 1em;
  margin: 1em 0em;
  cursor: pointer;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme ? props.theme.main : 'palevioletred'} ;
  border-radius: 3px;
`;

export default Button;