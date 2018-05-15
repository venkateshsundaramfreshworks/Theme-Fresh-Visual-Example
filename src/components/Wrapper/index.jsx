import React from 'react';
import PropTypes from 'prop-types';
import styled, {injectGlobal} from 'styled-components';

const Wrapper = styled.section`
        padding: 4em;
        height: calc(100vh - 100px);
     background: ${props=> props.theme ? props.theme.bg : 'papayawhip'};
   `;

Wrapper.propTypes = {
    theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
    theme: {},
};

export default Wrapper;