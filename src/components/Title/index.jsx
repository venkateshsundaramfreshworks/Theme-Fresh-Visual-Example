import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
            font-size: 1.5em;
            text-align: left;
            color: ${props => props.themeColor ? props.themeColor : 'palevioletred'};
`;

Form.propTypes = {
    themeColor: PropTypes.string
};

Form.defaultProps = {
    themeColor: '',
};

export default Title;