import { useNavigate } from 'react-router-dom'
import { getFinca } from "../../../helpers/fetch"

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Table = ({data = []}) => {
  const navigate = useNavigate()

  const loadTask = async (id) => {
    const res = await fetch("https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/" + id)
    const data = await res.json();
    
  };

  const params = useParams();

  useEffect(() => {
    (async () => {
      await loadTask()
    })();
     
    if (params.id) {
      // alert('ELIMINAR user id '+params.id)
      loadTask(params.id);
    }
  }, [params.id]);

  


  return (
    <table className="w-[92%] text-sm text-left text-gray-500 dark:text-gray-400 my-10 mx-auto  2xl:table xl:table">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
              ID
          </th>
          <th scope="col" className="px-6 py-3">
              NOMBRE
          </th>
          <th scope="col" className="px-6 py-3">
              UBICACION
          </th>
          <th scope="col" className="px-6 py-3">
              
          </th>
        </tr>
      </thead>
      <tbody>
        
          {data.map((data) => (
            <tr  key={data.id} className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
                <td scope="col" className="px-6 py-3">
                  {data.id}
                </td>
                <td scope="col" className="px-6 py-3">
                  {data.nombre}
                </td>
                <td scope="col" className="px-6 py-3">
                  {data.ubicacion}
                </td>
                <td scope="col" className=" ">
                  <button onClick={() => navigate(`/fincas/${data.id}`)}><i className="mt-2 mx-5 fa-solid fa-eye text-green-500"></i></button>
                  <button onClick={() => navigate(`/fincas/editar/${data.id}`)}><i className="my-5 mx-5 fa-solid fa-pen text-yellow-500"></i></button>
                </td>

            </tr>
          ))}
        
      </tbody>
    </table>
    
    
  );
};

export default Table