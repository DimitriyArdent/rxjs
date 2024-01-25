import React, { useEffect, useState } from 'react';
import { communicationObservable } from '../observables/observable';

export default function SubHome() {
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
    <div>
      sub home
      <div>{text}</div>
    </div>
  );
}
