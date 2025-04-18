export function InputButton( {value, setNotaAvaliacao} ) {
    function handleAlterarNotaAvaliacao(nota){
        setNotaAvaliacao(nota)
      }

    return(
        <input type="button" value={value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey leading-2 focus:text-white focus:bg-medium-grey hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-500 font-bold" onClick = {()=> handleAlterarNotaAvaliacao(value)}/>
    )
}