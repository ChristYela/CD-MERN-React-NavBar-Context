import React, { useContext } from "react";
import Context from "../contexts/Context";

const NavBar = () => {
    const style = {
        background: "purple",
        padding: "15px",
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    };
    const nameStyle = {
        color: "black"
    }

    const context = useContext(Context);

    return (
        <div style={style}>Hello <span style={nameStyle}>{context.name} </span> !  <br/> Nice to see you here.</div>
    );
}

export default NavBar;