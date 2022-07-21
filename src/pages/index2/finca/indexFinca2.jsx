import { useEffect, useState } from "react";
import Table from "./indexFinca";
import { dataToListFinca, getFincas } from "../../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import Card from "../../../componets/card";

const CatList = () => {

  var listNav4 = [{text:"Home", icon:"house", link:"/home"},{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

  const navigate = useNavigate()

  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const json = await getFincas();
    const data = dataToListFinca(json);
    console.log(data)
    setCats(data);

  }

  
  useEffect(() => {
    (async () => {
      await loadCats()
    })();
  }, []);
  
  return (
    <>
      <Card cards={listNav4}/>
      <div>
        <Table data={cats} />
        <button onClick={()=>(navigate("/registrarFinca"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Finca</button>
      </div>
    </>
  );
};

export default CatList

