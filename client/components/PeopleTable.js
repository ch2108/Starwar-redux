import React, { Component } from 'react';
import { connect } from 'react-redux';


@connect(state => ({
  peopleList: state.peopleList,
}))
export default class PeopleTable extends Component {

  render (){
    const { peopleList } = this.props;

    let trArray = []
      peopleList.forEach(people => {
        let tdArray = [];
        tdArray.push(<td>{people.name}</td>);
        tdArray.push(<td>{people.gender}</td>);
        trArray.push(<tr key = {people.created} >{tdArray}</tr>)
      });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Gender</td>
            </tr>
          </thead>
          <tbody>
            {trArray}
          </tbody>
        </table>
      </div>
    )
  }


}
