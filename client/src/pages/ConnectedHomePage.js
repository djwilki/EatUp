import React from "react";
import { connect } from "react-redux";
import { fetchHomePage } from "../store/content";
import HomePage from './HomePage';

class ConnectedHomePage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchHomePage(this.props.id);
    }
}
