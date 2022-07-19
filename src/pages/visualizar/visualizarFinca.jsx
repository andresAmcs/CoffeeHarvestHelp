import Index from "../../componets/visualizar/index"
import React, { useEffect, useState } from "react";
import { getDataFinca } from "../../helpers/fetch"
import { useParams } from 'react-router-dom';

function VisualizarFinca(){    
    const [dataFinca, setData] = useState({
        id:'',
        nombre: '',
        tipoFinca: '',
        ubicacion: ''        
      });

    console.log( getDataFinca(1))
    var Finca={
        title:"Finca",
        values:[
            {
                keys:"Id",
                value:dataFinca.id
            },
            {
                keys:"Nombre",
                value:dataFinca.nombre
            },
            {
                keys:"Tipo Finca",
                value:dataFinca.tipoFinca
            },
            {
                keys:"Ubicacion",
                value:dataFinca.ubicacion
            }
        ]
    
    }
    
    
    return <Index datas={Finca}/>

}

export default VisualizarFinca