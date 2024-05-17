## No manejar eventos correctamente

- Intentar actualizar el estado directamente en lugar de usar la función de actualización. 
+ Usar setClicked(!clicked) en lugar de setClicked(clicked = !clicked).


import React, { useState } from 'react';
function Button() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // - No se actualiza el estado correctamente
    setClicked(clicked = !clicked);
  };
  return (
    <button onClick={handleClick}>
      {clicked ? 'Clicked' : 'Click me'}
    </button>
  );
}
