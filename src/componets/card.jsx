import { NavLink } from "react-router-dom"

function Cards ({cards}){
    return(
        <>
        <div className="bg-[#ffffff42] lg:justify-center sm:grid sm:gap-4 sm:grid-cols-2 md:grid md:gap-4  max-w-[95%] mx-auto ">
        {cards.map(card => {
            return(
                <a href={card.link} className="mx-auto hover:scale-110">
                    <div className="bg-[#ffffff42] rounded   mx-5 my-5 shadow-lg">
                <span >                    
                    <i className={`mt-5 text-6xl mx-20 fa-solid fa-${card.icon}`}></i>
                </span>
                <div className="px-6 py-4">
                    <div className="text-center font-bold text-xl mb-2">{card.text}</div>                    
                </div>                
                </div>

                </a>                    

            )
        })}
        </div>
        </>
    )
}
export default Cards