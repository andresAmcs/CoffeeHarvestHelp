import React from "react";

function Card({color="white",Id, img, Title, text, instagram, facebook, email}) {

    return (

        <div className={`p-5 rounded max-w-sm shadow-lg mx-auto my-10 bg-blue-${color}`} id={Id}>
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{Title}</div>
                <p className="text-gray-700 text-base">
                    {text}
                </p>
            </div>            
            <div className="px-6 pt-4 pb-2">
                <a target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={instagram}><i className="fa-brands fa-instagram"></i></a>
                <a target="_blank" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={facebook}><i className="fa-brands fa-facebook"></i></a>
            </div>
        </div>


    )
}

export default Card