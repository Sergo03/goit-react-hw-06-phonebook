import shortid from 'shortid'; 
import types from './types'



const addContact = (data) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        // isIncludeName: !!contacts.item.find(contact => contact.name === data.name),
        data:data,
    }
})
export default {addContact}














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
