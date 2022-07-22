import { useEffect, useState } from "react";
import Card from "../../../componets/card";
import Navbar from "../../../componets/nav/navbar"
import estado from "../../../pages/navBar"
import { useNavigate } from "react-router-dom";

const CatList = () => {

  var listNav1 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

    const navigate=useNavigate()

  return (
    <>
      <Navbar buttons={estado}/>
      <Card cards={listNav1}/>
      <div>
      <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto  2xl:table xl:table">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
              ID
          </th>
          <th scope="col" className="px-6 py-3">
              Inicio
          </th>
          <th scope="col" className="px-6 py-3">
              Actividad
          </th>
          <th scope="col" className="px-6 py-3">
              Opciones
          </th>
        </tr>
      </thead>
      <tbody>
            <tr  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <td scope="col" className="px-6 py-3">
                  12
                </td>
                <td scope="col" className="px-6 py-3">
                  25-05-2021
                </td>
                <td scope="col" className="px-6 py-3">
                  Aplicar Fertilizante
                </td>
                <td scope="col" className=" ">
                  <button ><i className="mt-2 mx-5 fa-solid fa-eye text-green-500"></i></button>
                  <button ><i className="my-5 mx-5 fa-solid fa-pen text-yellow-500"></i></button>
                  <button ><i className="mb-2 mx-5 fa-solid fa-trash text-red-500"></i></button>
                </td>

            </tr>
            <tr  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <td scope="col" className="px-6 py-3">
                  15
                </td>
                <td scope="col" className="px-6 py-3">
                  28-08-2021
                </td>
                <td scope="col" className="px-6 py-3">
                  Deshierva
                </td>
                <td scope="col" className=" ">
                  <button ><i className="mt-2 mx-5 fa-solid fa-eye text-green-500"></i></button>
                  <button ><i className="my-5 mx-5 fa-solid fa-pen text-yellow-500"></i></button>
                  <button ><i className="mb-2 mx-5 fa-solid fa-trash text-red-500"></i></button>
                </td>

            </tr>
            <tr  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <td scope="col" className="px-6 py-3">
                  1
                </td>
                <td scope="col" className="px-6 py-3">
                  12-03-2020
                </td>
                <td scope="col" className="px-6 py-3">
                  Recoleccion
                </td>
                <td scope="col" className=" ">
                  <button ><i className="mt-2 mx-5 fa-solid fa-eye text-green-500"></i></button>
                  <button ><i className="my-5 mx-5 fa-solid fa-pen text-yellow-500"></i></button>
                  <button ><i className="mb-2 mx-5 fa-solid fa-trash text-red-500"></i></button>
                </td>

            </tr>
            <tr  className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <td scope="col" className="px-6 py-3">
                  144
                </td>
                <td scope="col" className="px-6 py-3">
                  01-08-2020
                </td>
                <td scope="col" className="px-6 py-3">
                  Renovacion
                </td>
                <td scope="col" className=" ">
                  <button ><i className="mt-2 mx-5 fa-solid fa-eye text-green-500"></i></button>
                  <button ><i className="my-5 mx-5 fa-solid fa-pen text-yellow-500"></i></button>
                  <button ><i className="mb-2 mx-5 fa-solid fa-trash text-red-500"></i></button>
                </td>

            </tr>
      </tbody>
    </table>
        <button className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5" type="button" >Refrescar</button>
        <button onClick={()=>(navigate("/seleccionarActividad"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Agregar Actividad</button>
      </div>
    </>
  );
};

export default CatList

