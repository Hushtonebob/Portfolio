

function DropDown({turn, hidePhone, hidePhoneSpace, hideSocial, hideSocialSpace,socBox}){

    return(
        <div id={`dropDown${turn}`}>
            <div id={hidePhone}>
                <h1 id="dropTitle">Contact Info</h1>
                <h3 id="phoneNumber">Phone Number: (602) 432-6806</h3>
                <div id={hidePhoneSpace}></div>
                <h3 id="email">Email: Bobby.deluna2@gmail.com</h3>
            </div>
            <div id={hideSocial}>
                <h1 id="socialTitle">Socials</h1>
                <div id={socBox}>
                    <img alt="linkedin"></img>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/robert-de-luna-9b9691165/" target="_blank">Linkedin</a>
                    <div id={hideSocialSpace}></div>
                    <img alt="github"></img>
                    <a rel="noreferrer" href="https://github.com/Hushtonebob" target="_blank">GitHub</a>
                    <div id={hideSocialSpace}></div>
                    <img alt="instagram"></img>
                    <a rel="noreferrer" href="https://www.instagram.com/hushtonebob/" target="_blank">Instagram</a>            
                </div>
            </div>
            <div id={"hide"}>
                <h1 id="skillTitle">More Info</h1>
                <p id="skills">These are my skills</p>
            </div>
        
        </div>
    )

//end of component
};

export default DropDown;