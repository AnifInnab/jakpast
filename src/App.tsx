import "./App.css";
import Circle from "./Circle";

const App = () => {
  return (
    <div className="app">
      <div className="row">
        <Circle />
        <Circle />
      </div>
      <div className="row">
        <Circle />
        <Circle />
      </div>
      <div className="row">
        <Circle />
        <Circle />
      </div>
    </div>
  );
};

export default App;
