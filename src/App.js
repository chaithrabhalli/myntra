/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { apiCall } from './actions/getDataAction';
// import ReactGantt, { GanttRow } from 'react-gantt';
import $ from 'jquery';
import kendo from '@progress/kendo-ui';
import { Gantt} from '@progress/kendo-gantt-react-wrapper';
import ErrorBoundary from './ErrorBoundary';
const moment = require('moment');

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
   
      dependency: [{
          predecessorId: 1,
          successorId: 2,
          type: 1
          }]}
  
  this.dependencyDataSource = new kendo.data.GanttDependencyDataSource({
      data: this.state.dependency
  })
}
  
  componentDidMount(){
    this.props.apiCall();
  }


  render() {
    const apiData = this.props.dataReducer;
    console.log(apiData)
    let dataSource = new kendo.data.GanttDataSource({
      data: apiData!= undefined ? apiData["success"]["data"] : []
    })
    return (
      <div>
          <Gantt dataSource={dataSource} dependencies={this.dependencyDataSource} height={700}
           />
          <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, { apiCall })(App);

