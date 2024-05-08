import { Link,NavLink ,Outlet } from "react-router-dom";
import Breadcrumbs from "../pages/careers/components/Breadcrumbs";

const RootLayout = () => {
    return ( 
        <div className="root-layout">
             <header>
      <nav>
        <h1>nagasundharam</h1>
        <Link to="/">Home</Link>
      
        <NavLink to="about">About</NavLink>
        <NavLink to ="help">Help</NavLink>
        <NavLink to ="careers">careers</NavLink>
      </nav>
      <Breadcrumbs />

    </header> 
    <main>
        
        <Outlet/>
    </main>
        </div>
     );
}
 
export default RootLayout;