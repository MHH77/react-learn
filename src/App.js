import "./App.css";

function App() {
  return (
    <div>
      <User name={12} age="Programmer" email="oracle" />
      <Job salary={12} position="Programmer" company="oracle" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
      <h1>{props.salary}</h1>
    </div>
  );
};

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
