import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid ;
  background: ${props => props.primary ? 'palevioletred' : props.theme ? props.theme.main : 'white'};
  color: ${props => props.primary ? 'white' : props.theme ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em 0em;
  cursor: pointer;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme ? props.theme.main : 'palevioletred'} ;
  border-radius: 3px;
`;

Button.propTypes = {
  primary: PropTypes.bool,
  theme: PropTypes.shape({ main: PropTypes.string })
};

Button.defaultProps = {
  primary: false,
  theme: { main: ''}
}
export default Button;