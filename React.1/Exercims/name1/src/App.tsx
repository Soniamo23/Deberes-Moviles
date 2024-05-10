
function App() {
  
  function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me.`;
  }

  
  return (
    <div>
     
      <p>{twoFer("sonia")}</p>
      <p>{twoFer("Bob")}</p>
      <p>{twoFer()}</p>
    </div>
  );
}

export default App;
