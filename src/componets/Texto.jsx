import React from "react";

function Texto(props) {
    return (
        <div className="mt-10 text-xl">
            <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-stone-900 text-center">{props.titulo}</h2>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base text-center">
                    {props.texto}
                </p>
            </div>
        </div>
    )
}

export default Texto;