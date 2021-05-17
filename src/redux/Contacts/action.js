import shortid from 'shortid'; 
// import types from './types';
import { createAction  } from '@reduxjs/toolkit';


export const addContact = createAction('contacts/add', ({ number, name }) => ({
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

 export const deleteContact=createAction('contacts/delete')
// const deleteContact = (contactid) => ({
//     type: types.DELETE,
//     payload: contactid,
// })


 export const  changeFilter=createAction('contacts/changeFilter')

// const changeFilter = (text) => ({
//     type: types.CHANGE_FILTER,
//     payload:text,
// })


// export default { addContact, deleteContact, changeFilter }














