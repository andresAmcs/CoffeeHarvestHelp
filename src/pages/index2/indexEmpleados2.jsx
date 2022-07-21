import { useEffect, useState } from "react";
import Table from "./indexEmpleados";
import { dataToList, getEmpleados } from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import Card from "../../componets/card";

const CatList = () => {

  var listNav1 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

  const navigate = useNavigate()

  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const json = await getEmpleados();
    const data = dataToList(json);
    setCats(data);

  }

  
  useEffect(() => {
    (async () => {
      await loadCats()
    })();
  }, []);
  
  return (
    <>
      <Card cards={listNav1}/>
      <div>
        <Table data={cats} />
        <button className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5" type="button" onClick={loadCats}>Refrescar</button>
        <button onClick={()=>(navigate("/registrarEmpleado"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Empleado</button>
      </div>
    </>
  );
};

export default CatList

