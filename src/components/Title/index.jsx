import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
            font-size: 1.5em;
            text-align: left;
            color: ${props => props.themeColor ? props.themeColor : 'palevioletred'};
`;

Title.propTypes = {
    themeColor: PropTypes.string
};

Title.defaultProps = {
    themeColor: '',
};

export default Title;