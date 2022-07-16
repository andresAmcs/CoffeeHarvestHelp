import React from "react"
import {Field, ErrorMessage } from "formik";


function Input (tipeInput, idInput, textPlaceholder, icon, nombre="holasapa"){
    return(
        <div className="flex my-5">
            <span className=" inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <i className={`fa-solid fa-${icon}`}></i>
            </span>            
            
            <Field type={tipeInput} id={idInput} name={nombre} className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder={textPlaceholder} />        

        </div>
    )
}
export default Input