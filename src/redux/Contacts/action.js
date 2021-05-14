import shortid from 'shortid'; 
// import types from './types';
import { createAction  } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add', ({ number, name }) => ({
    payload: {
        id: shortid.generate(),
        number,
        name,
    }
})
)

// const addContact = ({number,name}) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         number,
//         name,
//     }
// })

const deleteContact=createAction('contacts/delete')
// const deleteContact = (contactid) => ({
//     type: types.DELETE,
//     payload: contactid,
// })


const changeFilter=createAction('contacts/changeFilter')

// const changeFilter = (text) => ({
//     type: types.CHANGE_FILTER,
//     payload:text,
// })


export default { addContact, deleteContact, changeFilter }














// import shortid from 'shortid';
// import types from './types'

// const addContact = data => ({
//   type: types.ADD,
//   payload: {
//       id: shortid.generate(),
//       data:data,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
