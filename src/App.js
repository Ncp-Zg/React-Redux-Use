import logo from './logo.svg';
import './App.css';
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"
import Child3 from "./components/Child3"
import {useState} from "react"

function App() {
  const [state,setState]=useState(0)
  return (
    <div className="App" style={{display:"flex",justifyContent:"center"}}>
      <Child1 state={state}/>
      <Child2 state={state}/>
      <Child3 setState={setState}/>
    </div>
  );
}

export default App;
