import React from 'react';
interface Character {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
}
const generateAbilityScore = (): number => {
  const rolls: number[] = [...Array(4)].map(_ => generateRandomDiceRollScore());
  return rolls.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n);
};
const getModifierFor = (numberValue: number): number => {
  return Math.floor((numberValue - 10) / 2);
};
const generateRandomDiceRollScore = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};
const generateCharacter = (): Character => {
  return {
    strength: generateAbilityScore(),
    dexterity: generateAbilityScore(),
    constitution: generateAbilityScore(),
    intelligence: generateAbilityScore(),
    wisdom: generateAbilityScore(),
    charisma: generateAbilityScore(),
    hitpoints: 10 + getModifierFor(generateAbilityScore()),
  };
};
const CharacterSheet: React.FC = () => {
  const character = generateCharacter();
  return (
    <div className="character-sheet">
      <h2>Character Sheet</h2>
      <div>
        <p><strong>Strength:</strong> {character.strength}</p>
        <p><strong>Dexterity:</strong> {character.dexterity}</p>
        <p><strong>Constitution:</strong> {character.constitution}</p>
        <p><strong>Intelligence:</strong> {character.intelligence}</p>
        <p><strong>Wisdom:</strong> {character.wisdom}</p>
        <p><strong>Charisma:</strong> {character.charisma}</p>
        <p><strong>Hitpoints:</strong> {character.hitpoints}</p>
      </div>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Dungeons & Dragons Character Generator</h1>
      <CharacterSheet />
    </div>
  );
};

export default App;
