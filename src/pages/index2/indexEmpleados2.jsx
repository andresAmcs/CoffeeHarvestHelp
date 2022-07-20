import { useEffect, useState } from "react";
import Table from "./indexEmpleados";
import { dataToList, getEmpleados } from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";

const CatList = () => {

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
    <div>
      <Table data={cats} />
      <button className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5" type="button" onClick={loadCats}>Refrescar</button>
      <button onClick={()=>(navigate("/registrarEmpleado"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Empleado</button>
    </div>
  );
};

export default CatList

