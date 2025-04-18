import iconStar from "./images/icon-star.svg"
import { useState } from "react"

export function App() {

  const [notaAvaliacao, setNotaAvaliacao] = useState(0)

  function handleAlterarNotaAvaliacao(nota){
      setNotaAvaliacao(nota)
  }

  const [submited, setSubmited] = useState(false)

  function handeSubmit () {
    setSubmited(!submited)
  }

  return (
    <div>
      {submited === false ? (
            <div className="bg-gradient-dark mx-6 p-6 max-w-103 rounded-2xl text-white font-overpass">
      
            <div className="bg-dark-blue mb-4 p-4 w-fit rounded-full">
              <img src= {iconStar} alt="Icon Star"/>
            </div>
      
            <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
      
            <p className="text-light-grey text-sm leading-1 mb-6">Please, let us know how we did with your support request. All feedback is appreciated to help us improve our offering"</p>
      
            <div className="flex justify-between mb-6">
              <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-dark-blue focus:bg-medium-grey" onClick = {()=> handleAlterarNotaAvaliacao(1)}/>
              <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-dark-blue focus:bg-medium-grey" onClick = {()=> handleAlterarNotaAvaliacao(2)}/>
              <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-dark-blue focus:bg-medium-grey" onClick = {()=> handleAlterarNotaAvaliacao(3)}/>
              <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-dark-blue focus:bg-medium-grey" onClick = {()=> handleAlterarNotaAvaliacao(4)}/>
              <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-dark-blue focus:bg-medium-grey" onClick = {()=> handleAlterarNotaAvaliacao(5)}/>
            </div>
      
            <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange" onClick={handeSubmit}>Submit</button>
          </div>
      ): (
        <div className="bg-gradient-dark mx-6 p-6 max-w-103 rounded-2xl text-white font-overpass"> </div>
      )}
    </div>
  )

}