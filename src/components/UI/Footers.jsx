import footerapi from "../../api/Footerapi.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footers = () => {

    const footerIcon = {
       MdPlace: <MdPlace />,
       IoCallSharp: <IoCallSharp/>,
       TbMailPlus: <TbMailPlus/>,

    }

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                  footerapi.map((items,key) => {
                     const{icon,title,details} = items
                     return ( <div className="footer-contact" key={key}>
                     <div className="icon">{footerIcon [icon]}</div>
                     <div className="footer-contact-text">
                         <p>{title}</p>
                         <p>{details}</p>
                     </div>
                     </div> )   
                  })
                
                }

            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                Copyright &copy; 2024, All Right Reserved 
                            </p>
                        </div>
                         
                         <div className="footer-menu">
                            <ul>
                              
                            <li>
                                 <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                 <NavLink to="/contact">
                                        Contact
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="https://www.linkedin.com/in/alok-kumar-jha-809918171" target="_blank">
                                      < FaLinkedin/>  
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="https://github.com/jhaalok1997" target="_blank">
                                      < FaGithub />  
                                    </NavLink>
                                </li>
                            </ul>
                         </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}