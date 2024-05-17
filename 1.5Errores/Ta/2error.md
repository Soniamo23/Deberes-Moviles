## No retornar un valor en useEffect

- No retornar una función de limpieza desde useEffect. 
+ Retornar una función de limpieza que se ejecute al desmontar el componente o al actualizar la dependencia, por ejemplo, return () => clearInterval(interval).

import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
  return <div>Count: {count}</div>;
}
