import React from 'react';

class Matrix {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  get rows(): number[][] {
    return this.input.split('\n').map(row => row.split(" ").map(Number));
  }

  get columns(): number[][] {
    const rows = this.rows;
    const columns: number[][] = [];

    for (let i = 0; i < rows[0].length; i++) {
      columns[i] = rows.map(row => row[i]);
    }

    return columns;
  }
}

const App: React.FC = () => {
  const input = "1 9 3\n4 5 6\n7 8 9"; // Tu entrada de matriz

  const matrix = new Matrix(input);

  return (
    <div className="app">
      <h1>Matrix App</h1>
      <h2>Rows:</h2>
      <table>
        <tbody>
          {matrix.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Columns:</h2>
      <table>
        <tbody>
          {matrix.columns.map((column, index) => (
            <tr key={index}>
              {column.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
