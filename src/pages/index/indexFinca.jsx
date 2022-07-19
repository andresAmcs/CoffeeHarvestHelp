import React from "react"
import Table from "../../componets/index/table"
import ButtonAgregar from "../../componets/buttonAñadir"

function IndexFinca(){
    
    var Finca = {
    
        head:[
            
            "Nombre",
            "Tipo Actividad"
        ],
        buttons:[
            {
                icon:"eye",
                link:"/visualizarFincas"
            },
            {
                link:"/eliminarFinca",
                icon:"trash"
            },
            {
                link:"/actualizarFinca",
                icon:"pen"
            },
            {
                link:"/seleccionarFinca",
                icon:"check"
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
        <Table datos={Finca} nombre="Añadir nueva finca" link="/registrarFinca"/>             
        </>
        
    ) 
}


export default IndexFinca
