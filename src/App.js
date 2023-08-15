import './style/App.css';
import {useState} from "react";
import "./components/buisnessCard"
import BuissnessCard from './components/buisnessCard';
import DropDown from './components/dropdown';
function App() {

  const [hidePhone, setHidePhone] = useState("hide");
  const [hidePhoneSpace, setHidePhoneSpace] = useState("hidePhoneSpace");

  const [hideSocial, setHideSocial] = useState("hide");
  const [hideSocialSpace, setHideSocialSpace] = useState("hideSocialSpace");
  const [socBox, setSocBox] = useState("hideSocBox");
  const [link, setLink] = useState("hide");
  
  const [turn, setTurn] = useState("");

  return (
    <div className="App">
      <BuissnessCard 
        turn={turn}
        setTurn={setTurn}
        setHidePhone={setHidePhone}
        setHidePhoneSpace={setHidePhoneSpace}
        setHideSocial={setHideSocial}
        setHideSocialSpace={setHideSocialSpace}
        setSocBox={setSocBox}
        setLink={setLink}
        />
      <div>
      <DropDown
        turn={turn}
        hidePhoneSpace={hidePhoneSpace}
        hidePhone={hidePhone}
        hideSocial={hideSocial}
        hideSocialSpace={hideSocialSpace}
        socBox={socBox}
        link={link}
      />
      </div>
    </div>
  );
}

export default App;
