import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "./input"

function Formulario({title, action, forLabel, textLabel, icon, tipeInput, idInput, textPlaceholder, nameButton}){
    const [formularioEnviado, cambiarFormulario] = useState(false)
    return(
        <>        
        <div className="flex justify-center z-0">
            <div className="h-[90%] w-[80%] xl:w-[80%] md:w-[90%] sm:w-[90%] 2xl:w-[60%] bg-[#DECBA4] mt-10 mb-10 rounded-2xl">
                <div className="mt-10 text-xl">
                    <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">{title}</h2>
                    
                    <Formik
                        initialValues={{
                            nombre:""
                        }}
                        validate={(valores)=>{
                            let errores={

                            }
                            if(!valores.nombre){
                                errores.nombre = "usted no es gildardo"
                            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.nombre)){
                                errores.nombre = "debe ser otra cosa sapo"
                            }
                            return errores;
                        }}
                        onSubmit={(datos, {resetForm})=>{
                            resetForm()
                            console.log(datos)
                            cambiarFormulario(true)
                            setTimeout(() => {
                                cambiarFormulario(false)
                            }, 3000);
                        }}
                    >
                        {({errors})=>(

                        <Form action={action} >                            
                            <div className="my-5 mx-auto w-4/6">
                                <label className="w-[60%] block uppercase text-gray-800 font-bold" htmlFor={forLabel}>
                                    {textLabel}
                                </label>
                                    <Input/>
                                    <Input/>                                    
                                <ErrorMessage name="nombre" component={()=>(
                                <div className="error">{errors.nombre}</div>
                                )}/>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex mx-auto my-5">
                                {nameButton}
                            </button>                     
                            {formularioEnviado && <h3>se ha enviado el formulario</h3>}
                        </Form>   

                        )}
                    </Formik>                   
                </div>
            </div>
        </div>
        </>
    )
}

export default Formulario