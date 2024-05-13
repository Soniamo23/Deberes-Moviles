## React + Character
## Definición de la interfaz Character:
Creamos una interfaz para definir la estructura de un personaje de Dungeons & Dragons, que incluye las estadísticas de fuerza, destreza, constitución, inteligencia, sabiduría, carisma y puntos de golpe.

## Función generateAbilityScore:
Esta función genera un puntaje de habilidad para una estadística, simulando el lanzamiento de dados de Dungeons & Dragons. Se lanzan 4 dados, se descarta el más bajo, se suman los tres valores más altos y se devuelve el resultado.

## Función getModifierFor: 
Calcula el modificador de habilidad para un valor de habilidad dado, basado en la fórmula de Dungeons & Dragons.

Función generateRandomDiceRollScore: Genera un número aleatorio entre 1 y 6, simulando el lanzamiento de un dado de 6 caras.
Componente CharacterSheet: Renderiza un componente de hoja de personaje que muestra las estadísticas generadas para un personaje.

Componente App: Renderiza el título principal y el componente CharacterSheet, que muestra la hoja de personaje.
## Ejemplo 
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Dungeons & Dragons Character Generator</h1>
      <CharacterSheet />
    </div>
  );
};

export default App;



