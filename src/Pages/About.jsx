import React from "react"
import { useParams, useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()
    const { username } = useParams()

    return (
     <div> ABOUT PAGE { username }
        <button onClick = { () => navigate("/")}>to home</button>
     </div>
    )
  }
  
  export default About