import React, { useState } from 'react';
const App: React.FC = () => {
  const [sentence, setSentence] = useState('');

  const isPangram = (sentence: string): boolean => {
    sentence = sentence.toLowerCase();
    return [..."abcdefghijklmnopqrstuvwxyz"].every(c => sentence.includes(c));
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = isPangram(sentence);
    alert(`Is pangram: ${result}`);
  }
  return (
    <div className="App">
      <h1>Pangram Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a sentence:
          <input type="text" value={sentence} onChange={handleChange} />
        </label>
        <button type="submit">Check</button>
      </form>
    </div>
  );
}
export default App;
