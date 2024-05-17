## Uso incorrecto del hook useMemo

- No especificar las dependencias en el array de dependencias de useMemo. 
+ Agregar las dependencias necesarias al array de dependencias para que useMemo se recalcule cuando sea necesario.


import React, { useState, useMemo } from 'react';
function ExpensiveCalculation({ value }) {
  const result = useMemo(() => {
    return value * 2;
  });
  return <div>Result: {result}</div>;
}

