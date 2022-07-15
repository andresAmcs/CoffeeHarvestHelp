import React  from "react";

function Th(props) {
    
    return(
        <th scope="col" className="px-6 py-3">
            {props.nombre}
        </th>
    )
}

export default Th