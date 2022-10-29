import React from 'react';
import save from '../img/save.png';
import propTypes from 'prop-types';

export const RenderAdding = ({onHendlAdd}) => {
  function hendlAdd(evt) {
    const text = evt.target.previousSibling.value;
    if (!text) {console.log('text is empty'); return;}
    onHendlAdd(text);
    evt.target.previousSibling.value = '';
  }
  return (
    <div className='record'>
      <textarea className='record_text' rows='3' cols='30'/>
      <img className='record_img' onClick={hendlAdd} src={save} alt='button record'/>
    </div>
  )
}

RenderAdding.propTypes = {
  hendlAdd: propTypes.func,
}
