import illustrationThankYou from "../images/illustration-thank-you.svg"

export function CardFinal({ notaAvaliacao }) {
    return (
        <div className="bg-gradient-dark mx-6 p-6 max-w-103 rounded-2xl text-white font-overpass text-center"> 
            <img className="mx-auto mb-6" src= {illustrationThankYou} alt="Illustration Thank You" />

            <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You selected {notaAvaliacao} out of 5</p>

            <h1 className="text-2xl font-bold mb-2.5">Thank you</h1>
      
            <p className="text-light-grey text-sm leading-1">We apreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"</p>
        </div>  
    )
}