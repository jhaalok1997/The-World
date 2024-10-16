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
                        <p className="card-title"> {leads.name}</p>
                        <p><span className="card-description"></span>{leads.country}</p>
                        <p><span className="card-description">Position: </span>{leads.current_position}</p>
                        <p><span className="card-description">Breif: </span>{leads.description}</p>
                    </div>
    
                </div>)
                })
           
            }
        </div>

    </section>
    </>

  )
}
