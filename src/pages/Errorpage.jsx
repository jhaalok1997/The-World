import { NavLink, useRouteError } from "react-router-dom"


export const Errorpage = () => {

  const error  =  useRouteError();


  return (
    <>
    
      <h1> {error.status} {error.statusText}</h1><br/>
      <h2>{error.data} </h2><br/>
      <p>{error.error.message} Guys Check It Out !!!!</p><br/>
      <p>{error.error.stack}</p>
      <NavLink to ="/"><button>back to Home</button></NavLink>

    </>
  )
}

