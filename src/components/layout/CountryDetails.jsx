import { NavLink, useParams } from "react-router-dom";
import { getCountrySpecificData } from "../../api/postApi";
import { useState , useEffect , useTransition } from "react";

export const CountryDetails = () => {

    const params =  useParams()
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);


       useEffect(() => {

       startTransition(async () => {

       const response = await getCountrySpecificData(params.id);
    
       if(response.status === 200){
        
        setCountry(response.data);

       }
           
        })

       }, []);

        if (isPending) return <h1>Loading.....</h1>;
    

  return (
    <section className="card country-details-card container"> 
    <div className="container-card bg-white-box">
        {
            country.map((data,key) => {
                console.log(data)
            return( <div className="country-image grid grid-two-cols" key={key}>
                <img src={data.flags.svg} alt={data.flags.alt} className="flag" />
               
                 <div className="country-content">
    
                <p className="card-title">{data.name.common}</p>
                <p><span className="card-description">Native Name: </span>{data.name.nativeName.hun}</p>
               <p><span className="card-description">Capital: </span>{data.capital}</p>
               <p><span className="card-description">Population: </span>{data.population.toLocaleString()}</p>
               <p><span className="card-description">Borders: </span>{data.borders.join(" , ")}</p>
               <p><span className="card-description">Languages: </span>{data.languages.common}</p>
               <p><span className="card-description">Region: </span>{data.region}</p>
               <p><span className="card-description">Sub Region: </span>{data.subregion}</p>
               <p><span className="card-description">Top Level Domains: </span>{data.tld}</p>
                
                    
                 </div>
             </div>
            )
            })
       
        }
        <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn"><button>Previous</button></NavLink>
        </div>
    </div>   
        
    </section>
  
  )
}
