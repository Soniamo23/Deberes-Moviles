## No entender cómo funcionan los closures en useEffect

- No usar el valor actualizado de una variable dentro de un closure en useEffect. 
+ Pasar el valor actualizado como una dependencia al array de dependencias de useEffect.


import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Count: {count}</div>;
}
