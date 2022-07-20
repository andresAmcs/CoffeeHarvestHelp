import React, { useEffect, useState } from "react"
import Table from "../../componets/index/table"
import ButtonAgregar from "../../componets/buttonAñadir"
import { getEmpleados } from "../../helpers/fetch"

function IndexEmpleado(){
    

    const [datos,setDatos] = useState({
        id:"",
        nombre:""
    })

    const loadEmpleados = async () => {
        const res = await fetch("https://coffeharvesthelp-api.herokuapp.com/api/v1/empleados");
        const data = await res.json();
        return data
    }

    useEffect(() => {
        (async () => {

            const daticos= await loadEmpleados()
            
            console.log(daticos)

            setDatos( {id:daticos.data.id} )

        })();
      }, []);

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
            datos.id,
            "datos.nombre",
            "datos.genero"
        ]
    }

    return(
        <>
            <Table datos={empleado} nombre="Añadir nuevo empleado" link="/registrarEmpleado"/>        
        </>
    ) 
}


export default IndexEmpleado
