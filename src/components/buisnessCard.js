import headShot from '/Users/bobbydeluna/Desktop/blam/Portfolio/src/headshot.jpg'
import phone from '/Users/bobbydeluna/Desktop/blam/Portfolio/src/phone.png'
import at from '/Users/bobbydeluna/Desktop/blam/Portfolio/src/at.png'
import question from '/Users/bobbydeluna/Desktop/blam/Portfolio/src/question.png'


function BuissnessCard({
    turn,
    setTurn})
{
    const turnPhone = () => { 
        if(turn === ""){
            setTurn("Phone");
        }
        else if(turn === "Soc"){
                setTurn("DelaySoc");
                setTimeout(()=>{setTurn("Phone")}, 1000)
        }
        else if(turn === "MoreInfo"){
            setTurn("MoreInfoDelay");
            setTimeout(()=>{setTurn("Phone")},1000)
        }
        else{
            setTurn("DelayPhone");
            setTimeout(()=>{setTurn("")}, 1000);
        }    
        //end of turnPhone
            };

    
    const turnSoc = () => {
        if(turn === ""){
            setTurn("Soc");
        }
        else if(turn === "Phone"){
            setTurn("DelayPhone");
            setTimeout(()=>{setTurn("Soc")},1000);
        }
        else if(turn ==="MoreInfo"){
            setTurn("MoreInfoDelay");
            setTimeout(()=>{setTurn("Soc")},1000)
        }
        else {
            setTurn("DelaySoc");
            setTimeout(()=>{setTurn("")},1000)
        }
    };

    const turnInfo = () => {
        if( turn=== ""){
            setTurn("MoreInfo");
        }
        else if(turn ==="Phone"){
            setTurn("DelayPhone");
            setTimeout(()=>{setTurn("MoreInfo")},1000);
        }
        else if(turn === "Soc"){
            setTurn("DelaySoc");
            setTimeout(()=>{setTurn("MoreInfo")},1000)
        }
        else{
        setTurn("MoreInfoDelay");
        setTimeout(()=>{setTurn("")},1000)
        }
    };

    return (
        <div id="card">
            <img id='headshot' src={headShot} alt={"headshot"}/>
            <div id="headBorder"></div>
            <div id="cardInfo">
                <h1 id='name'>Robert De Luna</h1>
                <h2 id='title'>Full Stack Developer </h2>
            </div>
            <div id="contactInfo">
                <img id="phone" src={phone} alt='blam' onClick={turnPhone}></img>
                <img id="at" src={at} alt='blam' onClick={turnSoc}></img>
                <img id="question"src={question} alt='blam' onClick={turnInfo}></img>
            </div>
        </div>
            )
//end of component
}

export default BuissnessCard;
