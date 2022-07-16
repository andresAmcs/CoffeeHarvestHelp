import Button from "./buttons"
function Cards ({cards}){
    return(
        <>
        <div className="lg:flex lg:justify-center grid gap-4 sm:grid-cols-2  max-w-[95%] mx-auto">
        {cards.map(card => {
            return(

                <div className="bg-[#ffffff42] rounded inline-block mx-auto my-5 shadow-lg">
                <span >                    
                    <i className={`mt-5 text-6xl mx-20 fa-solid fa-${card.icon}`}></i>
                </span>
                <div className="px-6 py-4">
                    <div className="text-center font-bold text-xl mb-2">{card.text}</div>                    
                </div>                
            </div>
            )
        })}
        </div>
        </>
    )
}
export default Cards