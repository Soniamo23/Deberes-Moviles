## No usar el hook useState de manera adecuada

- No asignar un valor inicial. 
+ Asignar un valor inicial al estado inicial en useState, por ejemplo, useState(0) para un contador.

import React, { useState } from 'react';

function Counter() {

  // No asignar un valor inicial
  const [count, setCount] = useState();
  const increment = () => setCount(count + 1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
