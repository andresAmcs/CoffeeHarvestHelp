import React from "react"
import Table from "../../componets/index/table"

function IndexEmpleado(){
    
    var empleado = {
    
        head:[
            
            "Nombres",
            "Apellidos"
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
            "17451",
            "Juan",
            "Ospina"
        ]
    }

    return <Table datos={empleado}/>
}


export default IndexEmpleado
