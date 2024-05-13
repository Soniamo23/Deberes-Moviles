import React from 'react'; 
interface Planets {
  [key: string]: number;
}
const RATIOS: Planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};
function age(planet: string, seconds: number): number {
  return Number((seconds / 31557600 / RATIOS[planet]).toFixed(2));
}
const App: React.FC = () => {
  const earthAge = age('earth', 1000000000);
  const marsAge = age('mars', 1000000000);
  const jupiterAge = age('jupiter', 1000000000);
  return (
    <div>
      <h1>Edades en diferentes planetas</h1>
      <p>Edad en la Tierra: {earthAge} años</p>
      <p>Edad en Marte: {marsAge} años</p>
      <p>Edad en Júpiter: {jupiterAge} años</p>
    </div>
  );
}
export default App;
