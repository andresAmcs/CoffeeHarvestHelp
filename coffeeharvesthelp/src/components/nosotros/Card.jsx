import React from "react";

function Card(props) {

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10 bg-white" id={props.Id}>
            <img className="w-full" src={props.img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.nombre}</div>
                <p className="text-gray-700 text-base">
                    Busco Chicas Hot las cuales esten dispuestas a hacer cualquier COSA por dinero , especialmente la del SpiderMan
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={props.instagram}><i className="fa-brands fa-instagram"></i></a>
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={props.facebook}><i className="fa-brands fa-facebook"></i></a>
                <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={props.email}><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>


    )
}

export default Card