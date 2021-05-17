import React from 'react';
import PropsTypes from 'prop-types';
import style from './Style.module.css'
import { connect } from 'react-redux'
import * as actions from '../redux/Contacts/action'

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.label}> Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
            
  )
}

Filter.propTypes = {
  onChange: PropsTypes.func.isRequired
}
    

const mapDispatchToProps = dispatch => ({
  onChange:(e)=>dispatch(actions.changeFilter(e.currentTarget.value))
})




export default connect(null,mapDispatchToProps)(Filter);