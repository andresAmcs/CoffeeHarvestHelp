import React from "react"
import Table from "../../componets/index/table"
import Button from "../../componets/buttons"

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
        <Table datos={actividad}/>
        <Button name="Añadir nueva actividad" link="/seleccionarActividad"/>
        
        </>
    ) 
}


export default IndexActividades
