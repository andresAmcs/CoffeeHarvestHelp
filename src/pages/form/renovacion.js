import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Toaster, toast} from "react-hot-toast"


function Renovacion(props) {
    const formik = useFormik({

        initialValues: {
            document: '',
        },
    
        validationSchema: Yup.object({
    
            date: Yup.date()                    
                .required('Debe ingresar una fecha'),    
            lote: Yup.string()    
                .required("Debe de ingresar el lote en el que renovó"),            
            descripcion: Yup.string()                    
                .max(100,"Debe tener menos de 100 caracteres"), 
            numArboles: Yup.number()                    
                .required('Debe ingresar la cantidad de arboles que renovó'),                   
            numJornales: Yup.number()                    
                .required('Debe ingresar la cantidad de jornales que utilizo'),
            valor: Yup.number()                    
                .required('Debe ingresar el valor de recolección')
    
        }),
    
        onSubmit: values => {
    
          alert(JSON.stringify(values, null, 2));
          toast("Actividad Registrada")
    
        },
    
      });

    return (        
            
    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
                    <div className="w-100% text-center">
                        <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Renovación</h2>
                    </div>
        <form onSubmit={formik.handleSubmit}>
    
            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="date">
                    Fecha
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="date"    
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.date && formik.errors.date ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.date}</div>    
                    ) : null}
            </div>
    
            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="lote">
                    Lote
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-key`}></i>
                    </span>
                    
    
                    <input
    
                        id="lote"    
                        name="lote"    
                        type="text"    
                        onChange={formik.handleChange}    
                        onBlur={formik.handleBlur}    
                        value={formik.values.lote}    
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
    
                    />
    
                </div>
                {formik.touched.lote && formik.errors.lote ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.lote}</div>    
                    ) : null}
            </div>
                        
            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="descripcion">
                    Descripcion
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="descripcion"    
                        name="descripcion"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.descripcion && formik.errors.descripcion ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.descripcion}</div>    
                    ) : null}
            </div>

            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="numArboles">
                    Numero Arboles
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="numArboles"    
                        name="numArboles"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.numArboles}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.numArboles && formik.errors.numArboles ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.numArboles}</div>    
                    ) : null}
            </div>

            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="numJornales">
                    Numero Jornales
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="numJornales"    
                        name="numJornales"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.numJornales}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.numJornales && formik.errors.numJornales ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.numJornales}</div>    
                    ) : null}
            </div>            

            <div className="my-5 mx-auto w-100% ">
                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="valor">
                    Valor
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className={`fa-solid fa-home`}></i>
                    </span>
                        
                    <input
    
                        id="valor"    
                        name="valor"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.valor}
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                    />
    
                </div>
                {formik.touched.valor && formik.errors.valor ? (    
                    <div className='text-red-600 text-lg font-bold'>{formik.errors.valor}</div>    
                    ) : null}
            </div>            
            <input type="submit" value="Añadir ACtividad" className="bg-amber-600 hover:bg-amber-800 transition-colors cursos-pointer uppercase font-bold w-full p-3 text-white rounded-lg" />    
        </form>                                        
                </div>
            
        

        
    
      );
}

export default Renovacion