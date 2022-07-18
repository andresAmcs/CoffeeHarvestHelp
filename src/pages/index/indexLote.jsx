

import React from "react"
import Table from "../../componets/index/table"

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
                link:"#"
            },
            {
                link:"#",
                icon:"trash"
            },
            {
                link:"#",
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
    
    return <Table datos={lote}/>
}


export default IndexLote
