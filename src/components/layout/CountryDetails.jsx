import { useParams } from "react-router-dom"
import { getCountrySpecificData } from "../../api/postApi";


export const CountryDetails = () => {

    const params =  useParams()
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);


       useEffect(() => {
       startTransition(async () => {
       const response = await getCountrySpecificData(params.id);
       console.log(response)
           setCountry(response.data);
        })
       }, []);

           if (isPending) return <h1>Loading.....</h1>;


  return (
    <>
         <li className="country-card card">
                <div className="container-card bg-white-box">
                <img src={flags.png} alt={flags.alt}/>
               
                <div className="countryInfo">

                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0,12) : name.common }<br/></p>
                    <p><span className= "class-description">Capital: </span>{capital[0]}</p>
                    <p><span className= "class-description">Region: </span>{region}</p>
                    <p><span className= "class-description">population: </span>{population.toLocaleString()}</p>
                     <NavLink to={`/Country/${name.common}`}><button>More About...</button></NavLink>
                </div>
                </div>   
            </li>


        
        
    </>
  
  )
}
