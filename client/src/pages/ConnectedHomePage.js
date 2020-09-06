import React from "react";
import { connect } from "react-redux";
import { fetchHomePage } from "../store/content";
import HomePage from './HomePage';

class ConnectedHomePage extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchHome(this.props.auth.id);
    }

    render(){
        return <HomePage content={this.props.content}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    const content = state.content || {};
    return ({
      content: content,
      auth: state.auth
    })
  };

  const mapDispatchToProps = (dispatch) => ({
     fetchHome: (id) => dispatch(fetchHomePage(id)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ConnectedHomePage);
