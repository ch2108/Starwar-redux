const nextUrl = (state = 'http://swapi.co/api/people/', action) => {
  switch (action.type) {
    case 'GET_PEOPLE_FULFILLED':
      state = action.payload.next;
      return state;
    default:
      return state;
  }
}

export default nextUrl;
