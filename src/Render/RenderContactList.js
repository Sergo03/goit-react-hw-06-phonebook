import React from 'react';
// import PropsTypes from 'prop-types';
import { connect } from 'react-redux'
import actions from '../redux/Contacts/action'
import style from './Style.module.css'

const Render = ({ value, onDeleteContact }) => {

    return (
         <ul>
        {value.map((contact) => {
            return <li className={style.contact_item} key={contact.id}>{contact.name}: {contact.number} <button type='button' className={style.btn_del} onClick={()=>onDeleteContact(contact.id) }>delete</button></li>
          })}
        </ul>
    )
}

// Render.propTypes = {
//   value: PropsTypes.array.isRequired,
//   onDeleteContact:PropsTypes.func.isRequired
// }


const getVisibalContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
}


const mapStateToProps = ({ contacts: { items, filter } }) => ({
   value:getVisibalContacts(items,filter)
})


const mapDispatchToProps = dispatch => ({
  onDeleteContact:(id)=>dispatch(actions.deleteContact(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(Render);