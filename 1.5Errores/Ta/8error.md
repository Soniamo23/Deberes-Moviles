## Olvidar agregar dependencias en useEffect

- No se agregan dependencias al array de dependencias en useEffect. 
+ Agregar las dependencias necesarias para que useEffect se ejecute solo cuando sea necesario.


import React, { useState, useEffect } from 'react';
function DataFetcher() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // - No se agregan dependencias

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
}
