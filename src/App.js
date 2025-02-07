import "./App.css";

function App() {
  let age = 10;

  return (
    <div>{age > 20 ? <h1>age is over</h1> : <h1>age is not over</h1>}</div>
  );
}

export default App;
