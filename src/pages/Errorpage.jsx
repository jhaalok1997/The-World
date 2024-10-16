import { NavLink, useRouteError } from "react-router-dom"


export const Errorpage = () => {

  const error  =  useRouteError();


  return (
    <>
    
      <h1> {error.status} {error.statusText}</h1><br/>
      <h2>{error.data} </h2><br/>
      <p> Guys Check It Out !!!!</p><br/>
      
      <NavLink to ="/"><button>back to Home</button></NavLink>

    </>
  )
}

