import React from 'react';

import { useFormik, yupToFormErrors } from 'formik';

import * as Yup from 'yup';

import { createLote } from "../../../helpers/fetch"

import { useNavigate } from 'react-router-dom';

import { Toaster, toast } from "react-hot-toast";


function RegistrarLote() {

    const navigate=useNavigate()
  const formik = useFormik({

    initialValues: {
        nombreLote:"",
        cantArboles:"",
        tipoCafe:"",
        extensionM2:"",
        fechaSiembra:"",
        distanciaSiembraSurcos:"",
        distanciaSiembraPlantas:"",
        tipoPorte:"",
        tipoSiembra:"",
        abonado:"", 
        plagas:"",
        fincaId:"" 
    },

    validationSchema: Yup.object({

        nombreLote: Yup.string()

            .min(2,"Debe tener 2 o mas caracteres")
            .max(50, 'No puede tener mas de 50 Caracteres')

            .required('Debe ingresar un documento')
            ,
        cantArboles: Yup.number()

            .min(0,"No puede ser un valor negativo")
            .required("Debe de ingresar un valor numerico")
            ,
            
        tipoCafe: Yup.string()
            .required("Debe de seleccionar un valor")
        ,
        
        extensionM2: Yup.number()

            .positive("Debe ingresar un valor positivo")
            .required("Debe ingresar un valor numerico"),
        
        fechaSiembra: Yup.date()
        
            .required("Debe ingresar una fecha")
            ,
        
        distanciaSiembraSurcos: Yup.number()

            .positive("Debe de ingresar un valor positivo")
            .required("Debe de ingresar un valor")
            ,
        
        distanciaSiembraPlantas: Yup.number()

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

            .required("Debe de seleccionar un valor valido"),

        fincaId: Yup.number()

            .required("Debe de ingresar un valor")
    }),

    onSubmit: values => {


    toast("Lote Registrado")

        const nombreLote=values.nombreLote
        const cantArboles=values.cantArboles
        const tipoCafe=values.tipoCafe
        const extensionM2=values.extensionM2
        const fechaSiembra=values.fechaSiembra
        const distanciaSiembraSurcos=values.distanciaSiembraSurcos
        const distanciaSiembraPlantas=values.distanciaSiembraPlantas
        const tipoPorte=values.tipoPorte
        const tipoSiembra=values.tipoSiembra
        const abonado=values.abonado
        const plagas=values.plagas
        const fincaId=values.fincaId

        createLote({nombreLote,cantArboles,tipoCafe,extensionM2,fechaSiembra,distanciaSiembraPlantas,distanciaSiembraSurcos,tipoPorte,tipoSiembra,abonado,plagas,fincaId})

        setTimeout(() => {
            navigate("/indexLotes")
        }, 1200);




    },

  });

  return (

    <div className="md:w-[80%] md:m-auto md:my-10 2xl:w-1/2 bg-[#ffffff43] p-6 rounded-lg shadow-xl py-10 mt-10 mx-2 ">
        <Toaster/>
        <div className="w-100% text-center">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-amber-600">Añadir Lote</h2>
        </div>
    <form onSubmit={formik.handleSubmit}>
        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="nombreLote">
                Nombre Lote
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="nombreLote"

                    name="nombreLote"

                    type="text"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.nombreLote}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.nombreLote && formik.errors.nombreLote ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.nombreLote}</div>

                ) : null}
        </div>




        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="cantArboles">
                Cantidad de Arboles
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-home`}></i>
                </span>
                

                <input

                    id="cantArboles"

                    name="cantArboles"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.cantArboles}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.cantArboles && formik.errors.cantArboles ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.cantArboles}</div>

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
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="extensionM2">
                Extencion M2
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="extensionM2"

                    name="extensionM2"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.password}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.extensionM2 && formik.errors.extensionM2 ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.extensionM2}</div>

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
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="distanciaSiembraSurcos">
                Distancia de Siembra Surcos (Metros)
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="distanciaSiembraSurcos"

                    name="distanciaSiembraSurcos"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.distanciaSiembraSurcos}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.distanciaSiembraSurcos && formik.errors.distanciaSiembraSurcos ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.distanciaSiembraSurcos}</div>

                ) : null}
        </div>

        

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="distanciaSiembraPlantas">
                Distancia de siembra (Metros)
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="distanciaSiembraPlantas"

                    name="distanciaSiembraPlantas"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.distanciaSiembraPlantas}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.distanciaSiembraPlantas && formik.errors.distanciaSiembraPlantas ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.distanciaSiembraPlantas}</div>

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

        <div className="my-5 mx-auto w-4/6 ">
            <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor="fincaId">
                ID DE LA FINCA
            </label>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <i className={`fa-solid fa-key`}></i>
                </span>
                

                <input

                    id="fincaId"

                    name="fincaId"

                    type="number"

                    onChange={formik.handleChange}

                    onBlur={formik.handleBlur}

                    value={formik.values.fincaId}

                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"

                />

            </div>
            {formik.touched.fincaId && formik.errors.fincaId ? (

                <div className='text-red-600 text-lg font-bold'>{formik.errors.fincaId}</div>

                ) : null}
        </div>

      <button className='bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 border-b-4 border-amber-800 hover:border-amber-900 rounded flex mx-auto my-5' type="submit">Submit</button>

    </form>
</div>
  );

};



export default RegistrarLote