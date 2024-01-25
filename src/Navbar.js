 import React, { useEffect, useState } from 'react';
import { communicationObservable } from './observables/observable';
function Navbar() {

  const [text, setText] = useState('');

  useEffect(() => {
    const subscription = communicationObservable.subscribe((result) => {
      setText(result);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []); 
  return (
    <div className='nav'>
      navbar
    <div className='text'>{text}</div>  
    </div>
  )
}

export default Navbar
