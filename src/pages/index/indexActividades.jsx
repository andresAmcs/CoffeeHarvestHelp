import React from "react"
import Table from "../../componets/index/table"
import ButtonAgregar from "../../componets/buttonAñadir"

function IndexActividades(){
    var actividad = {
    
        head:[
            
            "Nombre",
            "Tipo Actividad"
        ],
        buttons:[
            {
                icon:"eye",
                link:"/visualizarActividades"
            },
            {
                link:"/eliminarActividad",
                icon:"trash"
            },
            {
                link:"/actualizarActividad",
                icon:"pen"
            }
        ],
        body:[
            "123",
            "DEsyerbar Lote 4",
            "Desyerbar",
        ]
    }
    return(
        <>
        <Table datos={actividad} nombre="Añadir nueva actividad" link="/seleccionarActividad"/>        
        
        </>
    ) 
}


export default IndexActividades
