## No usar el hook useRef para referencias mutables

- Intentar acceder al valor actual de una referencia mutable directamente. 
+ Acceder al valor actual de la referencia mutable utilizando inputRef.current.


import React, { useRef } from 'react';
function Input() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
