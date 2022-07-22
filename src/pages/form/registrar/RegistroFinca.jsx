import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

import { createFinca } from "../../../helpers/fetch"

import { Toaster, toast } from "react-hot-toast";


function RegistrarFinca() {

    const navigate=useNavigate()

  const formik = useFormik({

    initialValues: {
        tipoFinca: '',
        nombreFinca: '',
        ubicacionFinca: '',
        colindantes: '',
        totalHectareas: '',
        userId:"",
    },

    validationSchema: Yup.object({

        nombreFinca: Yup.string()

            .min(5,"Debe tener mas de 5 caracteres")
            .max(15, 'No puede tener mas de 15 Caracteres')

            .required('Debe ingresar un documento'),

            tipoFinca: Yup.string()

            .required("Debe de ingresar un valor"),

        ubicacionFinca: Yup.string()

            .required("Debe ingresar un valor"),

        colindantes: Yup.number()
        
            .required("Debe de ingresar un valor"),
        
        totalHectareas: Yup.number()

            .positive("Debe ser un valor positivo")
            .required("Debe ingresar un valor numerico"),
        
        userId: Yup.number()

            .required("Debe de ingresar un valor")
    }),

    onSubmit: values => {

        let tipoFinca = values.tipoFinca
        let nombreFinca = values.nombreFinca
        let ubicacionFinca = values.ubicacionFinca
        let colindantes = values.colindantes
        let totalHectareas = values.totalHectareas
        let userId = values.userId
        
        
        createFinca({tipoFinca,nombreFinca,ubicacionFinca,colindantes,totalHectareas,userId})
        
        toast("Finca Registrada")
        setTimeout(() => {

            navigate("/indexFincas")

        }, 1200);

    },

  });

  return (

    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
        <div className="w-100% text-center">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Añadir Finca</h2>
        </div>
    <form onSubmit={formik.handleSubmit}>
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombreFinca">
                Nombre Finca
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="nombreFinca"

                    name="nombreFinca"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.nombreFinca}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.nombreFinca && formik.errors.nombreFinca ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.nombreFinca}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipoFinca">
                Tipo Finca
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="tipoFinca"

                    name="tipoFinca"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tipoFinca}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >    
                
                <option value="">
                    Seleccione
                </option>
                <option value="organica">
                    Organica
                </option>
                <option value="tecnificada">
                    Tecnificada
                </option>
                <option value="otro">
                    Otro
                </option>
                
                </select>

            </div>
            {formik.touched.tipoFinca && formik.errors.tipoFinca ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipoFinca}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="ubicacionFinca">
                Ubicacion Finca
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="ubicacionFinca"

                    name="ubicacionFinca"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.ubicacionFinca}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.ubicacionFinca && formik.errors.ubicacionFinca ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.ubicacionFinca}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="colindantes">
                Cantidad Colindantes
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-map`}></i>
                </span>
                

                <input

                    id="colindantes"

                    name="colindantes"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.colindantes}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.colidantes && formik.errors.colindantes ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.colindantes}</div>

                ) : null}
        </div>

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="totalHectareas">
                Total Hectareas 
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-xmarks-lines`}></i>
                </span>
                

                <input

                    id="totalHectareas"

                    name="totalHectareas"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.totalHectareas}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.totalHectareas && formik.errors.totalHectareas ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.totalHectareas}</div>

                ) : null}
        </div>


        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="userId">
                Id de Usuario
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-money-bill-1-wave`}></i>
                </span>
                

                <input

                    id="userId"

                    name="userId"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.userId}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.userId && formik.errors.userId ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.userId}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>
      <button onClick={()=>(navigate("/indexFincas"))} className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5'>Volver</button>

    </form>
</div>
  );

};



export default RegistrarFinca