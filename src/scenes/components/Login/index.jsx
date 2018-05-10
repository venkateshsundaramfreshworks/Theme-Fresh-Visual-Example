import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Form from 'components/Form';
import Button from 'components/Button';
import Title from 'components/Title';

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
     const Wrapper = styled.section`
            padding: 20em 30em;
            background: papayawhip;
            `;
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


export default Login;
