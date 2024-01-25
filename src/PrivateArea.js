import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';
function PrivateArea() {
const ref = useRef()
  const[pokimons, setPokimons] = useState(null)
  const[cats, setCats] = useState(null)
  const[additionalCat, setadditionalCat] = useState(null)

  const[query, setQuery] = useState([1,2,3])

    useEffect(  ()=>{
        
        async function getData(){
          const [catResponse, pokemonResponses] = await Promise.all([
            axios.get('https://api.thecatapi.com/v1/images/search?limit=1'),
            axios.get('https://pokeapi.co/api/v2/pokemon/1'),  
          ]);
          setPokimons(pokemonResponses.data )
          setCats(catResponse.data[0])

          }
        getData()

    },[query])


    
    function handleSubmit(e){
      e.preventDefault()
      setQuery(ref.current.value)
    }

 


  return (
    <div className='home'>

      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>pokimon id/name:</label>
        <input ref={ref}></input>
        <button type='submit'>search</button>
      </form>


       
        {(pokimons && cats) &&
          <div className='images'>
            <label>{`pokimon name: ${pokimons.name}`}</label>
             <img src={pokimons.sprites.back_default}></img>
             <label>{`cat id name: ${cats.id}`}</label>
             <img src={cats.url}></img>
         </div>
           }
      {additionalCat&& <div className='images'>
             <label>{`cat id name: ${additionalCat.id}`}</label>
             <img src={additionalCat.url}></img>
        </div>}
    </div>
  )
}

export default PrivateArea
