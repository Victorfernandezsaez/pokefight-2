import React from "react"
import { useEffect, useState } from 'react'

function Pokedex() {
  const [backendData, setBackendData ]= useState([{}])
  useEffect(()=> {
    fetch('https://pokeback-vbf.herokuapp.com/pokemon')
    .then( response => response.json()
    ).then(
      data=> { setBackendData(data)})
    }, [])

    return (
     <div>

      {(typeof backendData.id === 'undefined') ? (
        <span>Loading...</span>
      ): (
        backendData.id.map((_id, i) => (
          <li key={i}>{[pokemon]}</li>
        ))
       )}
     </div>
    )
  }
  
  export default Pokedex