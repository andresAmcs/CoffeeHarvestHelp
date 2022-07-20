import { useEffect, useState } from "react";
import Table from "./indexFinca";
import { dataToListFinca, getFincas } from "../../../helpers/fetch";
import { useNavigate } from "react-router-dom";

const CatList = () => {

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
    <div>
      <Table data={cats} />
      <button onClick={()=>(navigate("/registrarFinca"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Finca</button>
    </div>
  );
};

export default CatList

