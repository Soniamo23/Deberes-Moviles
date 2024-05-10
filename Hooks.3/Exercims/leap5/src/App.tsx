import React from 'react';

function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const App: React.FC = () => {
  
  const year = 2025; 
  
  const isYearLeap = isLeap(year);

  return (
    <div className="App">
      <h1>Verificación de Año Bisiesto</h1>
      <p>El año {year} es {isYearLeap ? 'bisiesto' : 'no bisiesto'}.</p>
    </div>
  );
}

export default App;
