import "./App.css";

function App() {
  return (
    <div>
      <User name="ali" age={12} email="ali@test.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

export default App;
