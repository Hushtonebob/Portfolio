import './style/App.css';
import './style/buisnessCard.css';
import './style/dropDown.css';
import "./components/buisnessCard"
import BuissnessCard from './components/buisnessCard';
import DropDown from './components/dropdown';
import {useState} from "react";


function App() {
  
  const [turn, setTurn] = useState("");

  return (
    <div className="App">
      <BuissnessCard 
        turn={turn}
        setTurn={setTurn}
        />
      <DropDown
        turn={turn}
      />
      </div>
  );
}

export default App;
