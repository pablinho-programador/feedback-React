import iconStar from "../images/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardInicial( {setNotaAvaliacao, notaAvaliacao, setSubmited} ) { //(1) Essa é a função enviada pelo arquivo pai (App). Ela é uma propriedade do objeto "props" - criado      automaticamente ao criarmos uma propriedade no componente <CardInicial /> presente no App.lsx -, e, por isso, desestruturamas-na desse objeto usando chaves ({})


    function handleSubmit () {
        if (notaAvaliacao !== 0){
            setSubmited(true)
            return
        }
      
        alert("Please, choose a rate button!")
    }

    return(
        <div className="bg-gradient-dark mx-6 p-6 max-w-103 rounded-2xl text-white font-overpass">
      
            <div className="bg-dark-blue mb-4 p-4 w-fit rounded-full">
              <img src= {iconStar} alt="Icon Star"/>
            </div>
      
            <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>
      
            <p className="text-light-grey text-sm leading-1 mb-6">Please, let us know how we did with your support request. All feedback is a   ppreciated to help us improve our offering"</p>
      
            <div className="flex justify-between mb-6">
                <InputButton value={1} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={2} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={3} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={4} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={5} setNotaAvaliacao={setNotaAvaliacao}/>
            </div>
      
            <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange hover:bg-white hover:text-orange cursor-pointer transition duration-400" onClick={handleSubmit}>Submit</button>
          </div>
    )
}