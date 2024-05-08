import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HelpLayout = () => {
    return ( 
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Hardik Himanshu Pandya is an Indian international cricketer who is the current vice-captain of the Indian cricket team in limited overs format. He is the captain of Mumbai Indians in IPL. A batting all-rounder who bowls right-arm fast-medium deliveries, Pandya has represented India in all 3 formats. He occasionally plays for his regional team Baroda in domestic cricket</p>
            <nav>
                <NavLink to = "Faq">View the FAQ</NavLink>
                <NavLink to = "Contact">Contact Us</NavLink>         
            </nav>
            <Outlet/>
        </div>
     );
}
 
export default HelpLayout;