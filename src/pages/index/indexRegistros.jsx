import React from "react"
import Table from "../../componets/index/table"
import ButtonAgregar from "../../componets/buttonAñadir"

function IndexRegistros(){
    var Registros = {
    
        head:[
            
            "Nombre",
            "Fecha",
            "Descripcion",
            "Valor Total"
        ],
        buttons:[
            {
                icon:"eye",
                link:"/visualizarRegistros"
            },
            {
                link:"/eliminarRegistro",
                icon:"trash"
            },
            {
                link:"/actualizarRegistro",
                icon:"pen"
            }
        ],
        body:[
            "123",
            "DEsyerbar Lote 4",
            "Desyerbar",
            "cualquier cosa",
            "5000"
        ]
    }
    return(
        <>
        <Table datos={Registros} nombre="Añadir nuevo registro" link="/registrarRegistro"/>        
        </>

    ) 
}


export default IndexRegistros
