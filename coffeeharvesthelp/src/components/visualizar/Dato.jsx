import React from "react";


function Dato(props) {
    return(
        <div className="p-4 underline underline-offset-8">{props.clave} : {props.valor}</div>
    );
}

export default Dato;