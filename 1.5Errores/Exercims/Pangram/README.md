# React + Pangram

La función isPangram toma un parámetro sentence que se espera que sea una cadena de texto.

-En la primera línea dentro de la función, sentence se convierte a minúsculas utilizando el método toLowerCase(). Esto es importante para asegurarse de que no haya distinción entre letras mayúsculas y minúsculas al verificar si la oración contiene todas las letras del alfabeto.

-En la segunda línea, se utiliza el spread operator ([...]) para crear un array de todas las letras del alfabeto en minúsculas: ["a", "b", ..., "z"].

Se utiliza el método every() en este array recién creado. El método every() verifica si todos los elementos del array cumplen con cierta condición. En este caso, la condición es proporcionada por la función de flecha (c => sentence.includes(c)). Esta función de flecha verifica si la letra c está presente en la cadena sentence.
## React
Se importa React y useState desde 'react'.
Se importa './app.css' para aplicar estilos al componente.
Se define un componente funcional App.
Se utiliza el hook useState para crear un estado sentence y una función setSentence para actualizarlo.
La función isPangram se define dentro del componente y se utiliza para verificar si la oración ingresada es un pangrama.
-handleChange maneja los cambios en el input y actualiza el estado sentence.
-handleSubmit maneja el envío del formulario, llama a isPangram para verificar la oración y muestra una alerta con el resultado.
Se devuelve JSX que incluye un título, un formulario con un input y un botón, y se aplican estilos CSS.

