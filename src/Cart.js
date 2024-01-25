import React, { useEffect, useState } from 'react';
import SubCart from './components/SubCart'
import { communicationObservable } from './observables/observable';
function Cart() {
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
    <div className='cart'>
      <div className='text'>{text}</div>
      cart
      <SubCart></SubCart>
    </div>
  )
}

export default Cart
