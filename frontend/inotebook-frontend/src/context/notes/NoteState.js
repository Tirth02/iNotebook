import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) =>{
    const s1 = {
        "name":"Tirth",
        "class":"5b"
    }
    const [state,setState] = useState(s1);
    const update = () =>{
        setTimeout(() =>{
            setState({
                "name":"Harry",
                "class":"10b"
            })
        },1000);
    }
    return(
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;