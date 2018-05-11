import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormInput = styled.input.attrs({
    type: props => props.type,
    name: props => props.name,
  })`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  border: none;
  border-radius: 3px;
  `;

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
};

FormInput.defaultProps = {
  type: '',
  name: '',
};

export default FormInput;