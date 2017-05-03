const previousUrl = (state = 'http://swapi.co/api/people/', action) => {
  switch (action.type) {
    case 'GET_PEOPLE_FULFILLED':
      state = action.payload.previous || 'http://swapi.co/api/people/';
      return state;
    default:
      return state;
  }
}

export default previousUrl;
