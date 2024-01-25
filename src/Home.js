import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SubHome from './components/SubHome';
function Home() {

  const[dogs, setDogs] = useState(null)
  
    useEffect(  ()=>{
        
        async function getData(){
                   const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=3')
                   if(response.status === 200){
                    setDogs(response.data)

                   }  else{
                     console.log('')
                    }        
                  
         }
        getData()

    },[])


 


  return (
    <div className='home'>
            <SubHome></SubHome>

       {dogs&& dogs.map((dog)=>( 
        <div className='images'>
            <label>{`cat id: ${dog.id}`}</label>
            <img src={dog.url}></img>
        </div>
      ))}
     </div>
  )
}

export default Home
