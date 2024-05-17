## No manejar errores correctamente en useEffect


- No manejar los errores correctamente en una operación asincrónica dentro de useEffect. 
+ Capturar y manejar los errores utilizando un bloque catch en la promesa devuelta por la operación asincrónica.


import React, { useState, useEffect } from 'react';
function ErrorHandling() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      Data: {data}
    </div>
  );
}
