import React from 'react';
import styled from 'styled-components';

const FormInput = styled.input.attrs({
    type: props => props.type,
    value: props => props.value,
    name: props => props.name,
    onChange: props => props.onChange
  })`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  border: none;
  border-radius: 3px;
  `;
export default FormInput;