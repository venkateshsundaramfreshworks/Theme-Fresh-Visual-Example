import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import theme from 'styled-theming';
import _find from 'lodash/find';
import _noop from 'lodash/noop';
import _capitalize from 'lodash/capitalize';

import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import Title from 'components/Title';

import { getMessageData } from 'services/messages/actions';
import { mode } from 'constants/appConstants';
import MessageContent from './components/MessageContent';


class Messsages extends React.Component {
    constructor (props) {
        super(props);
            this.state ={
                data: []
            }
        // this.handleChange=this.handleChange.bind(this);
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
        const { data } = this.state;
        const { theme } = this.props;
        return(
            <Wrapper>
                <Title>
                        {theme.mode && _capitalize(theme.mode)}
                </Title>
                <Button onClick={this.handleClick}>Compose</Button>
                {data && data.length !==0 && data.map((obj,index) => (<MessageContent key={index} from={obj.from} content={obj.content} time={obj.time}></MessageContent>))}
            </Wrapper>
        )   
    };

    // handleChange(e){
    //     console.log(e.target.name, e.target.value)
    //     this.setState({ mode: e.target.value});
    // }

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

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Messsages));
