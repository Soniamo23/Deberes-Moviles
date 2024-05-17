## Modificar el estado directamente:

- Modificar el estado directamente sin usar la función de actualización. 
+ Usar la función de actualización de estado, por ejemplo, setCount(count + 1).


import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // - Modificar el estado directamente
    count++;
    setCount(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
