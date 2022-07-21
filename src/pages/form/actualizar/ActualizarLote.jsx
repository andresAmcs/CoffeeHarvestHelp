import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import * as Yup from 'yup';

import { Toaster, toast } from "react-hot-toast";


function ActualizarLote() {

  const formik = useFormik({

    initialValues: {
        nombre:"",
        canArboles:"",
        tiCafe:"",
        em2:"",
        fechaSiembra:"",
        distanSurcos:"",
        distanSiembra:"",
        tipoPorte:"",
        tipoSiembra:"",
        abonado:"", 
        plagas:"" 
    },

    validationSchema: Yup.object({

        nombre: Yup.string()

            .min(2,"Debe tener 2 o mas caracteres")
            .max(50, 'No puede tener mas de 50 Caracteres')

            .required('Debe ingresar un documento')
            ,
        canArboles: Yup.number()

            .min(0,"No puede ser un valor negativo")
            .required("Debe de ingresar un valor numerico")
            ,
            
        tipoCafe: Yup.string()
            .required("Debe de seleccionar un valor")
        ,
        
        em2: Yup.number()

            .positive("Debe ingresar un valor positivo")
            .required("Debe ingresar un valor numerico"),
        
        fechaSiembra: Yup.date()
        
            .required("Debe ingresar una fecha")
            ,
        
        distanSurcos: Yup.number()

            .positive("Debe de ingresar un valor positivo")
            .required("Debe de ingresar un valor")
            ,
        
        distanSiembra: Yup.number()

            .positive("Debe de ingresar un valor positivo")
            .required("Debe de ingresar un valor numerico"),
        
        tipoPorte: Yup.string()

            .required("Debe de seleccionar un valor valido")
        ,
        
        tipoSiembra: Yup.string()

            .required("Debe de ingresar un valor"),
            

        
        abonado: Yup.string()

            .required("Debe de seleccionar un valor valido"),
        
        plagas: Yup.string()

            .required("Debe de seleccionar un valor valido")
    }),

    onSubmit: values => {

      

      toast("Lote Registrado")

    },

  });

  return (

    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
        <div className="w-100% text-center">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Actualizar Lote</h2>
        </div>


    <form onSubmit={formik.handleSubmit}>
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombre">
                Nombre Lote
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="nombre"

                    name="nombre"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.nombre}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.nombre && formik.errors.nombre ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.nombre}</div>

                ) : null}
        </div>




        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="canArboles">
                Cantidad de Arboles
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="canArboles"

                    name="canArboles"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.canArboles}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.canArboles && formik.errors.canArboles ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.canArboles}</div>

                ) : null}
        </div>

        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipoCafe">
                Tipo de cafe
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <select

                    id="tipoCafe"

                    name="tipoCafe"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tiCafe}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="" label='seleccione'>
                        Seleccione
                    </option>
                    <option value="tipica" label='tipica'>
                        Típica
                    </option>
                    <option value="borbon" label="borbon">
                        Borbón
                    </option>
                    <option value="maragogipe" label='maragogipe'>
                        Maragogipe
                    </option>
                    <option value="tabi" label="tabi">
                        Tabi
                    </option>
                    <option value="caturra" label="caturra">
                        Caturra
                    </option>
                    <option value="variedadCo" label="variedadCo">
                        Variedad Colombia
                    </option>
                    <option value="otro" label="otro">
                        Otro
                    </option>

                </select>

            </div>
            {formik.touched.tipoCafe && formik.errors.tipoCafe ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipoCafe}</div>

                ) : null}
        </div>


        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="em2">
                Extencion M2
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="em2"

                    name="em2"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.password}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.em2 && formik.errors.em2 ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.em2}</div>

                ) : null}
        </div>


        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="fechaSiembra">
                Fecha siembra
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="fechaSiembra"

                    name="fechaSiembra"

                    type="date"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.fechaSiembra}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.fechaSiembra && formik.errors.fechaSiembra ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.fechaSiembra}</div>

                ) : null}
        </div>


        
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="distanSurcos">
                Distancia de surcos (Metros)
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="distanSurcos"

                    name="distanSurcos"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.distanSurcos}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.distanSurcos && formik.errors.distanSurcos ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.distanSurcos}</div>

                ) : null}
        </div>

        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="distanSiembra">
                Distancia de siembra (Metros)
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="distanSiembra"

                    name="distanSiembra"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.distanSiembra}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.distanSiembra && formik.errors.distanSiembra ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.distanSiembra}</div>

                ) : null}
        </div>



        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipoPorte">
                Tipo Porte
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <select

                    id="tipoPorte"

                    name="tipoPorte"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tipoPorte}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="">
                        Seleccione
                    </option>
                    <option value="alto">
                        Alto
                    </option>
                    <option value="bajo">
                        Bajo
                    </option>

                </select>
            </div>
            {formik.touched.tipoPorte && formik.errors.tipoPorte ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipoPorte}</div>

                ) : null}
        </div>



        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="tipoSiembra">
                Tipo Siembra
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="tipoSiembra"

                    name="tipoSiembra"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.tipoSiembra}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.tipoSiembra && formik.errors.tipoSiembra ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.tipoSiembra}</div>

                ) : null}
        </div>

        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="abonado">
                Abonado
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <select

                    id="abonado"

                    name="abonado"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.abonado}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="" label='Seleccione'>
                        Seleccione
                    </option>
                    <option value="true" label='si'>
                        si
                    </option>
                    <option value="false" label="no">
                        no
                    </option>

                </select>

            </div>
            {formik.touched.abonado && formik.errors.abonado ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.abonado}</div>

                ) : null}
        </div>

        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="plagas">
                Plagas
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <select

                    id="plagas"

                    name="plagas"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.plagas}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                >

                    <option value="" >
                        Seleccione
                    </option>
                    <option value="true" label='si'>
                        si
                    </option>
                    <option value="false" label="no">
                        no
                    </option>

                </select>

            </div>
            {formik.touched.plagas && formik.errors.plagas ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.plagas}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>
</div>

  );

};



export default ActualizarLote