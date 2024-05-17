import React from 'react';
interface Point {
  x: number;
  y: number;
}
const App: React.FC = () => {
  const calculateScore = (point: Point): number => {
    const { x, y } = point;
    const distance = Math.sqrt(x * x + y * y);

    if (distance > 10) {
      return 0;
    } else if (distance > 5) {
      return 1;
    } else if (distance > 1) {
      return 5;
    } else {
      return 10;
    }
  };
  const point: Point = { x: 5, y: 2 };
  const score = calculateScore(point);

  return (
    <div className="app">
      <h1>Score Calculator</h1>
      <p>Point: ({point.x}, {point.y})</p>
      <p>Score: {score}</p>
    </div>
  );
};
export default App;
