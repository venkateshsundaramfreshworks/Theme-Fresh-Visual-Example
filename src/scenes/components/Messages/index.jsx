import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import _find from 'lodash/find';
import { connect } from 'react-redux';

import Button from 'components/Button';
import Title from 'components/Title';

import MessageContent from './components/MessageContent';
import { getMessageData } from 'services/messages/actions';
import { themes } from 'constants/appConstants';

class App extends React.Component {
   constructor (props) {
       super(props);
       this.state ={
        theme: { name: 'theme1', background: 'papayawhip', titleColor: 'palevioletred', title: 'Theme1'},
        data: []
       }
       this.handleChange=this.handleChange.bind(this);
       this.handleClick=this.handleClick.bind(this);
   }

   componentWillReceiveProps(nextProps){
       if (nextProps.messages && nextProps.messages.length !== this.state.data.length) {
        this.setState({ data: nextProps.messages });
       }
   }
   componentDidMount () {
        this.props.getMessageData();
   }

   render() {
     const { theme, data } = this.state;
     const { name, background, titleColor, title } = theme;
     const Wrapper = styled.section`
            padding: 4em;
            height: calc(100vh - 100px);
            background: ${background};
            `;
    const themeSelected = {
        main: background
        };
      return (
        <ThemeProvider theme={themeSelected}>
        <Wrapper>
            <div>
                <select name="themeSelected" value={name} onChange={this.handleChange} style={{float: 'right'}}>
                    <option value="theme1">Theme1</option>
                    <option value="theme2">Theme2</option>
                    <option value="theme3">Theme3</option>
                </select>
            </div>
            <Title themeColor={titleColor}>
            {title && title}
            </Title>
            <Button primary onClick={this.handleClick}>Compose</Button>
            {data && data.length !==0 && data.map((obj,index) => (<MessageContent key={index} from={obj.from} content={obj.content} time={obj.time}></MessageContent>))}
        </Wrapper> 
        </ThemeProvider>
      );
   }

   handleChange(e){
       console.log(e.target.name, e.target.value)
       const theme = _find(themes, obj => obj.name === e.target.value);
       this.setState({ theme });
   }

   handleClick(e) {
       console.log('clicked')
   }
}

const mapStateToProps = (state, ownProps) => ({
    messages: state.messages.messageData,
});

const mapDispatchToProps = dispatch => ({
    getMessageData: () => dispatch(getMessageData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
