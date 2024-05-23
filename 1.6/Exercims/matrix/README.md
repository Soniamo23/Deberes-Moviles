## React + Matrix

export class Matrix : Se define una clase llamada Matrix.

input: string: Se declara una propiedad llamada input que es de tipo string. Esta propiedad almacenará la representación textual de la matriz.

constructor(input: string) { this.input = input }: Se define un constructor que acepta una cadena input y la asigna a la propiedad input de la instancia de la matriz.

get rows(): : Se define un getter llamado rows que devuelve un array bidimensional de números que representa las filas de la matriz.

this.input.split('\n'): Divide la cadena de entrada en un array de cadenas utilizando el salto de línea como delimitador, lo que separa las filas de la matriz.

.map(x => x.split(" ")): Mapea cada fila dividida en un array de cadenas utilizando el espacio como delimitador, lo que separa los elementos dentro de cada fila.

.map(x => x.map): Mapea cada cadena a su valor numérico convirtiéndolo en un array bidimensional de números.

get columns(): number: Se define un getter llamado columns que devuelve un array bidimensional de números que representa las columnas de la matriz.

let matrix = this.rows: Obtiene la representación de las filas de la matriz.

let cols: number = []: Inicializa un array vacío para almacenar las columnas.

for (let i: number = 0; i : Itera sobre cada índice de columna.

cols[i] = : Para cada índice de columna, crea una columna mapeando los elementos correspondientes de cada fila.

Retorna el array bidimensional de columnas.
## JSX
(sintaxis de React) que se renderizará en la pantalla. Primero, se crea un elemento div con la clase app. Dentro de este div, hay un encabezado h1 con el texto "Matrix App". Luego, hay una sección para las filas y otra para las columnas.
