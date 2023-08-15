import headShot from '/Users/bobbydeluna/Desktop/Portfolio/portfolio/src/headshot.jpg';
import phone from '/Users/bobbydeluna/Desktop/Portfolio/portfolio/src/phone.png'
import at from '/Users/bobbydeluna/Desktop/Portfolio/portfolio/src/at.png'
import question from '/Users/bobbydeluna/Desktop/Portfolio/portfolio/src/question.png'


function BuissnessCard({
    setHidePhone,
    setHidePhoneSpace,
    setHideSocial,
    setHideSocialSpace,
    setSocBox,
    turn,
    setTurn,
    setLink
}){


    const turnPhone = () => { 
        if(turn !== "Phone") {
            setHidePhone("phoneInfo");
            setHidePhoneSpace("phoneSpacing");
            setTurn("Phone"); 
        } 
        else{
            setHidePhone("hide");
            setHidePhoneSpace("hidePhoneSpace");
            setTurn("");    
        } 
        console.log("oop")
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
                <img id="at" src={at} alt='blam'></img>
                <img id="question"src={question} alt='blam'></img>
            </div>
        </div>
            )
//end of component
}

export default BuissnessCard;
