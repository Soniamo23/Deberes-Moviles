## 1 No manejar el estado inmutable correctamente

- Modificar el estado directamente sin crear otra referencia.
+ Crear una nueva copia del estado antes de modificarlo, como, setItems([...items, 'New Item']).


import React, { useState } from 'react';
function List() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    items.push('New Item');
    setItems(items);
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}