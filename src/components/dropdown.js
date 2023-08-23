import PhoneDrop from "./phoneDrop";
import SocDrop from "./socDrop";
import MoreInfo from "./moreInfo";

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
        else if(turn === "MoreInfo"){
            return <MoreInfo />
        }
        else if(turn === "MoreInfoDelay"){
            return <MoreInfo />
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