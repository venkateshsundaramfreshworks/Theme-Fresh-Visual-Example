import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
color: ${props => props.theme.bg};
border: 2px solid ${props => props.theme.bg};
background: ${props => props.theme.fg};
font-size: 1em;
outline: none;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

&:hover {
    cursor: pointer;
}
`;

Button.propTypes = {
    theme: PropTypes.shape({}),
};

Button.defaultProps = {
    theme: {},
};

export default Button;