import axios from 'axios';


export let getPeople = (url) => ({
  type: 'GET_PEOPLE',
  payload: axios.get(url)
    .then(res => res.data)
})
