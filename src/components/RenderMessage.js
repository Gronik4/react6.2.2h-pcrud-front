import React from 'react';
import del from '../img/del.png';
import propTypes from 'prop-types';

export const RenderMessage = ({messages, onDeleteMessage}) => {
  if (!messages) {return;}
  function hendleClickDel(evt) {
    const id = evt.target.closest('.message').id;
    onDeleteMessage(id);
  }
  return (
    <div className='messages'>
      {messages.map((el) =>{
        return(
          <div className='message' key={el.id} id={el.id}>
            <p className='message_p'>{el.text}</p>
            <img className='message_img' src={del} onClick={hendleClickDel} alt='cros'/>
          </div>
        ) 
      })} 
    </div>
  )
}

RenderMessage.propTypes = {
  hendleClickDel: propTypes.func,
  id: propTypes.string
}
