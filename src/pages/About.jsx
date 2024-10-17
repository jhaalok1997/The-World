import politicians from "../api/Politicians.json"

export const About = () => {
  return (
    <>
    <section className="section-about container">
        <p className="container-title">
            Some Informations about the World's Leaders

        </p>

        <div className="gradient-cards">
            {
                politicians.map((leads,key)=>{
                    return(  <div className="card" key={leads.id}>
                    <div className="container-card bg-blue-box" >
                        <p className="card-title"> {leads.name.length > 15 ? leads.name.slice(0,12) : leads.name}</p>
                        <p><span className="card-description"></span>{leads.country}</p>
                        <p><span className="card-description">Position: </span>{leads.current_position}</p>
                        <p><span className="card-description">Breif: </span>{leads.description.length > 20 ? leads.description.slice(0,100) : leads.decription}</p>
                    </div>
    
                </div>)
                })
           
            }
        </div>

    </section>
    </>

  )
}
