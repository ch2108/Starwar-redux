import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeople, increment } from '../actions';
import PeopleTable from './PeopleTable'

@connect(state => ({
  peopleList: state.peopleList,
  nextUrl: state.nextUrl,
  previousUrl: state.previousUrl
}))
export default class Container extends Component {

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(getPeople(this.props.nextUrl))
  }
  render (){

    const { dispatch } = this.props;

    return (
      <div>
        <h1>Star War People List</h1>
        <PeopleTable />
        <hr/>
        <button onClick={() => dispatch(getPeople(this.props.previousUrl))}>previus</button>
        <button onClick={() => dispatch(getPeople(this.props.nextUrl))}>next</button>
      </div>
    )
  }


}
