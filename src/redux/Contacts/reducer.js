import { combineReducers } from 'redux';
// import types from './types';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action'

const items = createReducer([], {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.deleteContact]:(state, {payload})=>state.filter(contact => contact.id !== payload),
})


// const items = (state = [], {type,payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
//         case types.DELETE:
//             return state.filter(contact => contact.id !== payload);   
//         default:
//             return state;
//     }
    
// }

const filter = createReducer('', {
    [actions.changeFilter]:(_,{payload})=>payload,
})


// const filter = (state = '', {type,payload}) => {
//     switch (type) {
//         case [actions.changeFilter]:
//             return payload
//         default:
//          return  state
//     }  
// }

export default combineReducers({
    items,
    filter,
})
















// import { combineReducers } from 'redux';
// import types from './types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };


// export default combineReducers({
//   items,
//   filter,
// });