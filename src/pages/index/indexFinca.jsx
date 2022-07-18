import React from "react"
import Table from "../../componets/index/table"
import Button from "../../componets/buttons"

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
        <Table datos={Finca}/>
        <Button name="Añadir nueva finca" link="/registrarFinca"/>        
        </>
        
    ) 
}


export default IndexFinca
