import React from "react";


function Fila(props) {
    return(        
        <th className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{props.valor}</th>
    );
}

export default Fila;