import React from "react"
import Table from "../../componets/index/table"

function IndexActividades(){
    var actividad = {
    
        head:[
            
            "Nombre",
            "Tipo Actividad"
        ],
        buttons:[
            {
                icon:"eye",
                link:"a"
            },
            {
                link:"b",
                icon:"trash"
            },
            {
                link:"c",
                icon:"pen"
            }
        ],
        body:[
            "123",
            "DEsyerbar Lote 4",
            "Desyerbar",
        ]
    }
    return <Table datos={actividad}/>
}


export default IndexActividades
