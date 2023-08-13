//every begining has a begining, and this is this begining. And, being that
//this is the begining, take it with a grain of salt as there is quite a road
//yet being paved; as I am learning, all code and documentation are "as is"

/**
 * This project works with basic versions of <input>
 * --<input> version where reload only occurs on hitting a button
 * --<input> version where state is updated for each key entered in the text field\
 * --<input> version where only a floating point number is allowed
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
        <button onClick={()=> setNameState(userTextRef.current.value)}> Submit </button>
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

/**
 * This text box only takes floating point numbers, and (for fun)
 * sets an error flag if the user attempted to type a non-floating
 * number into the box 
 */
function FloatTextOnlyDynamic({numVal, setNumVal, setErrorInNumber}){
    const floatRegExExpr = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/

    const handelNumEntry = (event) => {
        const enteredVal = event.target.value;

        const passedTest = floatRegExExpr.test(enteredVal)

        if(enteredVal==="" || passedTest){
            setErrorInNumber(false)
            setNumVal(enteredVal)
        }
        if(!passedTest){
            setErrorInNumber(true)
        }
    }

    return(
        <>
        <label htmlFor="floatBox">Give Floating Number: &nbsp;</label>
                <input type="text"
                    id="floatBox"
                    placeholder="Entry..."
                    value={numVal}
                    onChange={handelNumEntry}/>
        </>
    )
}


//"export default"  makes this the main component in the file.
//returns a component that contains the filter table with a little
//header above
export default function ProduceManager() {

    const [userName, setUserName] = useState("")
    const [userNum, setUserNum] = useState("")
    const [errorInNum, setErrorInNum] = useState(false)
    
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

            <div className="input-form">
                <FloatTextOnlyDynamic numVal={userNum}
                                      setNumVal={setUserNum}
                                      setErrorInNumber={setErrorInNum}/>
            </div>

            <div className="output-area">
                <div>{ userName!==""?"Entered Name: " + userName:"" }</div>
                <div>{ userNum!==""?"Entered NNumber: " + userNum:"" }</div>
                <div>{errorInNum ? "Invalid Keystroke in Number Field Was Detected Check Your Entry":"" }</div>
            </div>
        </div>
        </>
    );

}// end main function

