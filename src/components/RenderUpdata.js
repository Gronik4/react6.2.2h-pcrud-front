import React from 'react';
import updata from '../img/updata.png';

export const RenderUpdata = ({onHendleClick}) => {
  function hendleUppdata() {
    onHendleClick();
  }
  return (
    <div className='notes'>
      <h2 className='notes_h3'>Notes</h2>
      <img className='notes_img' onClick={hendleUppdata} src={updata} alt='button updata'/>
    </div>
  )
}

