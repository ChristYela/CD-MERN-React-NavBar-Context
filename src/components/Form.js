import React, { useContext } from "react";
import Context from "../contexts/Context";

const Form = () => {
    const style = {
        padding: '10px',
        textAlign: 'center'
    }

    const {name, setName} = useContext(Context);
    
    return (
        <div style={style}>
            <div>
                <label>Name:</label>{" "}
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name here..."/>
            </div>
        </div>
    );
}

export default Form;