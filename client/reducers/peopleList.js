const peopleList = (state = [], action) => {
  switch (action.type) {
    case 'GET_PEOPLE_FULFILLED':
      state = action.payload.results.slice();
      return state;
    default:
      return state;
  }
}

export default peopleList;
