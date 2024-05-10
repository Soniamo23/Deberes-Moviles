import React from 'react';
interface M {
  [key: string]: string;
}
const Map: M = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};
const App: React.FC = () => {
  const toRna = (dna: string): string => {
    if (/[^ACGT]/.test(dna)) {
      throw new Error('Invalid input DNA.');
    }
    return dna.replace(/[ATCG]/g, m => Map[m]);
  };
  const inputDNA = "GCTA";
  const resultRNA = toRna(inputDNA);

  return (
    <div className="App">
      <h1>Transcripción de ADN a ARN</h1>
      <p>Cadena de ADN: {inputDNA}</p>
      <p>Cadena de ARN resultante: {resultRNA}</p>
    </div>
  );
};

export default App;
