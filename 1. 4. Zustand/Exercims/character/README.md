# React + Age

## Importación de React:
La primera línea importa React, el cual es necesario para definir componentes de React y utilizar JSX.
Definición de la interfaz Planets: Esta interfaz define un tipo para objetos que tienen claves de tipo string y valores de tipo number. En este caso, se utiliza para definir el tipo de la constante RATIOS.
## Definición de RATIOS: 
RATIOS es un objeto que mapea los nombres de los planetas a los ratios de conversión de segundos a años en cada planeta. Los valores son proporcionados por la NASA y representan los períodos orbitales de cada planeta en años terrestres.
Función age: Esta función toma dos argumentos: el nombre de un planeta (planet) y el número de segundos (seconds). Calcula la edad en años para el planeta especificado dividiendo los segundos por el número de segundos en un año (31557600), y luego dividiendo por el ratio correspondiente al planeta. El resultado se redondea a dos decimales utilizando toFixed(2) y se convierte a un número usando Number() antes de ser devuelto.
## Componente App:
Este componente es un componente funcional de React que renderiza la edad en la Tierra y en Marte utilizando la función age. Calcula la edad en la Tierra y en Marte para un número dado de segundos (1000000000) y muestra los resultados en la interfaz de usuario utilizando JSX.
Exportación del componente App: Finalmente, el componente App se exporta como el componente predeterminado de este archivo, lo que permite que otros archivos lo importen y lo utilicen en sus propias aplicaciones React.
