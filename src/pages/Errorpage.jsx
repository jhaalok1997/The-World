import { useRouteError } from "react-router-dom"


export const Errorpage = () => {

  const error  =  useRouteError();
  console.log(error)

  return (
    <>
    
      <h1> {error.status} {error.statusText}</h1><br/>
      <h2>{error.data} </h2><br/>
      <p>{error.error.message} Guys Check It Out !!!!</p><br/>
      <p>{error.error.stack}</p>

    </>
  )
}
