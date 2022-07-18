import React from "react"
import Table from "../../componets/index/table"
import Button from "../../componets/buttons"

function IndexLote(){
    var lote = {
    
        head:[
            
            "Nombre",
            "Total Arboles",
            "Metros Cuadrados"
        ],
        buttons:[
            {
                icon:"eye",
                link:"/visualizarLotes"
            },
            {
                link:"/eliminarLotes",
                icon:"trash"
            },
            {
                link:"/actualizarLote",
                icon:"pen"
            }
        ],
        body:[
            "100",
            "mio",
            "4",
            "4"
        ]
    }
    
    return(
        <>
        <Table datos={lote}/>
        <Button name="Añadir nuevo lote" link="/registrarLote"/>        
        </>
    ) 
}


export default IndexLote
