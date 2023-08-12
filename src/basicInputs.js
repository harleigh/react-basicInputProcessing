//every begining has a begining, and this is this begining. And, being that
//this is the begining, take it with a grain of salt as there is quite a road
//yet being paved; as I am learning, all code and documentation are "as is"

/**
 * Using Reference Fields
 */

import { useState, useRef } from "react";


//"export default"  makes this the main component in the file.
//returns a component that contains the filter table with a little
//header above
export default function ProduceManager() {

    const [userName, setUserName] = useState("")
    const userTextRef = useRef()

    //const onSubmitClick = () => { setUserName(userTextRef.current.value) }

    const handleKeyDownUserInput = (event) => {
        if(event.key ==="Enter"){
            setUserName(userTextRef.current.value)
        }
    }

    //value places into the text box
    return (
        <>
        <div className="app">
            <h1>Basic Inputs in React</h1>
            <div className="input-forum">
                    <label htmlFor="userNameInputBoxRefVersion">Enter User Name (Ref. Version): &nbsp;</label>
                    <input type="text"
                        id="userNameInputBoxRefVersion"
                        placeholder="Entry..."
                        onKeyDown={handleKeyDownUserInput}
                        ref={userTextRef}/>
                     
                    <button onClick={()=> setUserName(userTextRef.current.value)}> Submit </button>
            </div> 
                
            <div className="input-forum">
                <label htmlFor="userNameInputBoxDynamicVersion">Enter User Name (Dyn. Version): &nbsp;</label>
                <input type="text"
                    id="userNameInputBoxDynamicVersion"
                    placeholder="Entry..."
                    onChange={(e)=>setUserName(e.target.value)}/>
            </div>
                

            <div className="output-area">
                <div>{ userName!==""?"You entered: " + userName:"" }</div>
            </div>
        </div>
        </>
    );

}// end main function

