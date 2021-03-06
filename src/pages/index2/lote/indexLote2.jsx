import { useEffect, useState } from "react";
import Table from "./indexLote";
import { dataToListLote, getLotes,deleteLote } from "../../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import Card from "../../../componets/card";
import Navbar from "../../../componets/nav/navbar"
import estado from "../../../pages/navBar"

const CatList = () => {

  var listNav1 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

  const navigate = useNavigate()

  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const json = await getLotes();
    const data = dataToListLote(json);
    setCats(data);

  }

  
  useEffect(() => {
    (async () => {
      await loadCats()
    })();
  }, []);
  
  return (
    <>
      <Navbar buttons={estado}/>
      <Card cards={listNav1}/>
      <div>
        <Table data={cats} />
        <button onClick={()=>(navigate("/registrarLote"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Lote</button>
      </div>
    </>
  );
};

export default CatList

