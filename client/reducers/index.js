import { combineReducers } from 'redux';

import counter from './counter';
import peopleList from './peopleList';
import nextUrl from './nextUrl'
import previousUrl from './previousUrl'

export default combineReducers({
  counter,
  peopleList,
  nextUrl,
  previousUrl
});
