import Button from "../buttons"
function Cards ({cards}){
    return(
        <>
        {cards.map(card => {
            return(

                <div className="max-w-sm rounded inline-block mx-11 my-5 shadow-lg">
                <span >                    
                    <i className={`text-6xl mx-20 fa-solid fa-${card.icon}`}></i>
                </span>
                <div className="px-6 py-4">
                    <div className="text-center font-bold text-xl mb-2">{card.text}</div>                    
                </div>                
            </div>
            )
        })}
        </>
    )
}
export default Cards