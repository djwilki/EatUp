import React from "react";
import { connect } from "react-redux";
import { fetchEventPage } from "../store/event";
import EventPage from './EventPage';

class ConnectedEventPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchEvent(this.props.match.params.id);
    }

    render(){
        return <EventPage content={this.props.content}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const content = state.content || {};
    const event = state.event || {};
    return ({
      event: event,
      content: content,
      auth: state.auth
    })
  };

  const mapDispatchToProps = (dispatch) => ({
     fetchEvent: (id) => dispatch(fetchEventPage(id)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ConnectedEventPage);
