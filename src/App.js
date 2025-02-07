import "./App.css";

function App() {
  let age = 20;

  return (
    <div className="App">
      {age > 20 ? <h1>age is over</h1> : <h1>age is not over</h1>}
      {age === 20 && <h1>Age is 20 !</h1>}
    </div>
  );
}

export default App;
