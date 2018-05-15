import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withTheme } from 'styled-components';

import Form from 'components/Form';
import Button from 'components/Button';
import Title from 'components/Title';
import Wrapper from 'components/Wrapper';

import FormInput from 'components/Form/components/FormInput';

import { browserHistory } from 'react-router';

class Login extends React.Component {
   constructor (props) {
       super(props);
       this.state ={
       }
       this.handleClick=this.handleClick.bind(this);
   }

   render() {
      return (
        <Wrapper>
            <Title>
            Login
            </Title>
            <Form>
                Email:<FormInput type="email" ref="email" name="email"/>
                Password:<FormInput name="password" ref="password" type="password"/>
            <Button primary onClick={this.handleClick}>Login</Button>
            </Form>
        </Wrapper> 
      );
   }

   handleClick(e) {
       e.preventDefault();
       const email = ReactDOM.findDOMNode(this.refs.email).value;
       const password = ReactDOM.findDOMNode(this.refs.password).value;
       console.log('clicked', email, password)
       if (email && password) {
            browserHistory.push('/message')
       }
   }
}


export default withTheme(Login);
