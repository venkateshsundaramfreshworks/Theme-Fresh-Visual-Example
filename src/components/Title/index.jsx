import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
            font-size: 1.5em;
            text-align: left;
            color: ${props => props.theme ? props.theme.fg : 'palevioletred'};
`;

Title.propTypes = {
    theme: PropTypes.shape({}),
};

Title.defaultProps = {
    theme: {},
};

export default Title;