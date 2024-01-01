import { useState } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className="board">
          <Grid />
        </div>
      </div>
    </>
  );
}

export default App;
