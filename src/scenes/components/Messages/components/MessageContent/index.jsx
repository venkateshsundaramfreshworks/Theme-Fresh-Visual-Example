import React from 'react';
import { Row, Col } from 'react-flexgrid';

const MessageContent = ({ from, content, time}) => (
    <Row style={{border: '1px solid #d2d8d6'}}>
        <Col xs={2} lg={2} md={2}>{from}</Col>
        <Col xs={8} lg={8} md={8}>{content}</Col>
        <Col xs={2} lg={2} md={2}>{time}</Col>
    </Row>
);

export default MessageContent;