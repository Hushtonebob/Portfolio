import PhoneDrop from "./phoneDrop";
import SocDrop from "./socDrop";

function DropDown({turn}){


    const turnDisplay = () => {
        if(turn === ""){
        }
        else if(turn ==="Phone"){
            return <PhoneDrop/>;
        }
        else if(turn ==="DelayPhone"){
            return <PhoneDrop/>;
        }
        else if(turn === "Soc"){ 
            return <SocDrop />;
        }
        else if(turn === "DelaySoc"){ 
            return <SocDrop />;
        }
    }

    return(
        <div id={`dropDown${turn}`}> 
            {turnDisplay()}      
        </div>
    )

//end of component
};

export default DropDown;