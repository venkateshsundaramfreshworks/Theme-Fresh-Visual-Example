import React, { PropTypes } from 'react';
import _noop from 'lodash/noop';

const Form = ({ onSubmit, children, className, ...restProps }) => (
    <form
        onSubmit={onSubmit}
        noValidate
        {...restProps}>
        {children}
    </form>
);

export default Form;
