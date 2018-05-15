import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexgrid';

const MessageContent = ({ from, content, time}) => (
    <Row style={{border: `1px solid #f6f6f6`}}>
        <Col xs={2} lg={2} md={2}>{from}</Col>
        <Col xs={8} lg={8} md={8}>{content}</Col>
        <Col xs={2} lg={2} md={2}>{time}</Col>
    </Row>
);

MessageContent.propTypes = {
    from: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
};

MessageContent.defaultProps = {
    from: '',
    content: '',
    time: '',
}

export default MessageContent;