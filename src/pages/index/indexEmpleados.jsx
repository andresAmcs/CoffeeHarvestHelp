import React from "react"
import Table from "../../componets/index/table"
import ButtonAgregar from "../../componets/buttonAñadir"

function IndexEmpleado(){
    
    var empleado = {
    
        head:[
            
            "Nombres",
            "Apellidos"
        ],
        buttons:[
            {
                icon:"eye",
                link:"/visualizarEmpleados"
            },
            {
                link:"/eliminarEmpleado",
                icon:"trash"
            },
            {
                link:"/actualizarEmpleado",
                icon:"pen"
            }
        ],
        body:[
            "17451",
            "Juan",
            "Ospina"
        ]
    }

    return(
        <>
        <Table datos={empleado} nombre="Añadir nuevo empleado" link="/registrarEmpleado"/>        
        </>
    ) 
}


export default IndexEmpleado
