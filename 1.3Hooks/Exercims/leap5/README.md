# React Año Bisiesto

Importamos React y el archivo CSS.
Definimos la función isLeap en la parte superior del archivo app.tsx.
Creamos un componente funcional App que usa isLeap para determinar si un año específico es bisiesto o no.
El año se establece como 2024 por defecto, pero puedes cambiarlo según lo necesites.
El resultado se muestra en el navegador.

Importamos la biblioteca React, que nos permite crear componentes de React y manejar el DOM de manera eficiente.
También importamos el archivo app.css, que contiene estilos CSS para nuestro componente App.

Esta es una función que toma un año (year) como argumento y devuelve un valor booleano (true si el año es bisiesto, false si no lo es).
Utiliza la lógica que proporcionaste anteriormente para determinar si un año es bisiesto o no.

Este es un componente funcional de React llamado App.
Dentro de este componente:
Definimos una variable year que contiene el año que queremos verificar si es bisiesto o no. Puedes cambiar este valor según necesites.
Luego, llamamos a la función isLeap con el año proporcionado y almacenamos el resultado en la variable isYearLeap.
Renderizamos JSX dentro de un div. 
Mostramos un encabezado H1 y un párrafo P que indican si el año es bisiesto o no, dependiendo del valor de isYearLeap.
Utilizamos una expresión ternaria (isYearLeap ? 'bisiesto' : 'no bisiesto') para mostrar el mensaje adecuado según el resultado de la función isLeap.

##EJEMPLO
const App: React.FC = () => {
  const year = 2024; // Puedes cambiar el año aquí para probar
  const isYearLeap = isLeap(year);

  return (
    <div className="App">
      <h1>Verificación de Año Bisiesto</h1>
      <p>El año {year} es {isYearLeap ? 'bisiesto' : 'no bisiesto'}.</p>
    </div>
  );
}
