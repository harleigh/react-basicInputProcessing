//every begining has a begining, and this is this begining. And, being that
//this is the begining, take it with a grain of salt as there is quite a road
//yet being paved; as I am learning, all code and documentation are "as is"

/**
 * Using Reference Fields
 */

import { useState, useRef } from "react";

/**
 * Presents a textbox and a submit button, the state (passed as prop) will not 
 * be updated until the submit key is pressed (or the enter
 * key is pressed)
 */
function TextViaReference({ setNameState}) {

    const userTextRef = useRef()

    const handleKeyDownUserInput = (event) => {
        if(event.key ==="Enter"){
            setNameState(userTextRef.current.value)
        }
    }

    return (
        <>
        <label htmlFor="userNameInputBoxRefVersion">Enter User Name (Ref. Version): &nbsp;</label>
                    <input type="text"
                        id="userNameInputBoxRefVersion"
                        placeholder="Entry..."
                        onKeyDown={handleKeyDownUserInput}
                        ref={userTextRef}/>  
        <button onClick={()=> console.log(userTextRef.current.value)}> Submit </button>
        </>
    )
}

/**
 * Component updates the state (of the user name) dynamically (as the user types)
 */
function TextViaDynamic({name, setNameState}){

    return(
        <>
        <label htmlFor="userNameInputBoxDynamicVersion">Enter User Name (Dyn. Version): &nbsp;</label>
                <input type="text"
                    id="userNameInputBoxDynamicVersion"
                    placeholder="Entry..."
                    value={name}
                    onChange={(e)=>setNameState(e.target.value)}/>
        </>
    )
}

//"export default"  makes this the main component in the file.
//returns a component that contains the filter table with a little
//header above
export default function ProduceManager() {

    const [userName, setUserName] = useState("")
    

    //value places into the text box
    return (
        <>
        <div className="app">
            <h1>Basic Inputs in React</h1>
            <div className="input-forum">
                <TextViaReference setNameState={setUserName}/>
            </div> 
                
            <div className="input-forum">
                <TextViaDynamic name={userName} setNameState={setUserName}/>
            </div>

            <div className="output-area">
                <div>{ userName!==""?"You entered: " + userName:"" }</div>
            </div>
        </div>
        </>
    );

}// end main function

