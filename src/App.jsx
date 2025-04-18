import { CardInicial } from "./components/CardInicial"
import illustrationThankYou from "./images/illustration-thank-you.svg"
import { useState } from "react"

export function App() {

  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  return (
    <div>
      {submited === false? (
            <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao= {notaAvaliacao} setSubmited={setSubmited} /> // (1)Essa função precisa permancer no App e ser usada no CardInicial. Então, cria-se uma props que vai mandar para o arquivo filho (CardInicial) essa função.
      ): (
        <div className="bg-gradient-dark mx-6 p-6 max-w-103 rounded-2xl text-white font-overpass text-center"> 
          <img className="mx-auto mb-6" src= {illustrationThankYou} alt="Illustration Thank You" />

          <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You selected {notaAvaliacao} out of 5</p>

          <h1 className="text-2xl font-bold mb-2.5">Thank you</h1>
      
          <p className="text-light-grey text-sm leading-1">We apreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"</p>
        </div>
      )}
    </div>
  )

}