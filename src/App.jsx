import "./style.css";
import LeftSide from "./components/left-side";
import RightSide from "./components/right-side";

function App() {
  return (
    <div className="container">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
