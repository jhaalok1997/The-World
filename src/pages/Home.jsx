import { FaLongArrowAltRight } from "react-icons/fa"


export const Home = () => {
  return (
    <main className="hero-section main">
       <div className="container grid grid-two-cols">
        <div className="hero-content">
            <h1 className="heading-xl">
                Explore the World, one Country at a Time.
            </h1>
            <p className="paragraph">
               Discover the history,culture, and beauty of every nation. Sort, search, and filter through countries to find the details you
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaLongArrowAltRight/>
            </button>
        </div>
        <div className="hero-image">
            <img className="banner-image" src="./images/world_unsplash.jpg" alt="World image"/>
        </div>
        </div> 
    </main>
  )
}
