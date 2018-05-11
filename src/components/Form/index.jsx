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

Form.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Form.defaultProps = {
    className: '',
    onSubmit: _noop,
    children: null,
};

export default Form;