import React, { Component } from 'react'

import axios from 'axios'

export default class Homeworld extends Component {
    constructor(){
        this.state = {
            homeworldData: null,
            loading: true
        }
    }
    getHomeworldData(url){
        return axios.get(url).then(response => response.data)
    }
    handleGet(url){
        return this.getHomeworldData(url)
        .then (homeworldData =>this.setState({homeworldData, loading: false}))
    }
    componentDidMount(){
        // send out request for data
        this.getHomeworldData(https://vschool-cors.herokuapp.com?url=https:)
        .then(homeworldData => this.setState({homeworldData, loading: false}));
    }
    componentDidUpdate(prevProps){
        if(prevProps.url !== this.props.url){

        }
    }
    render() {
        const {loading, homeworldData, err} = this.state;
        return (
            <div>
                {loading ?
                <div>...Loading data}
            </div>
        )
    }
}
