

export const Countrycard = ({country}) => {
    const{flags,name,population,region,capital}= country
  return (
    <>
            
            <li className="country-card card">
                <div className="container-card bg-white-box">
                <img src={flags.png} alt={flags.alt}/>
               
                <div className="countryInfo">
                    
                    <p className="card-title">{name.common}<br/></p>
                    <p><span className= "class-description">Capital: </span>{capital[0]}</p>
                    <p><span className= "class-description">Region: </span>{region}</p>
                    <p><span className= "class-description">population: </span>{population.toLocaleString()}</p>
            
                </div>
                </div>   
            </li>
            
            
    </>
   
  )
}
