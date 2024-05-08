import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'; 
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout'; 
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact'; 
import NotFound from './NotFound';
import Careers from './pages/careers/Careers';
import { careersLoader } from './pages/careers/Careers';
import CareersLayout from './layout/careersLayout';
import CareerDetails from './pages/careers/careerDetails';
import { careerDetailsLoader } from './pages/careers/careerDetails';
import CareerError from './pages/careers/careerError';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      
      
      <Route path="help" element={<HelpLayout/>}>
        <Route path="Faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
      </Route> 


      <Route path = "careers" element = {<CareersLayout/> }>
          <Route 
          index element = { <Careers/>} 
          loader =  { careersLoader } />
         <Route path = ":id"
         element = {<CareerDetails/>}
         loader = {careerDetailsLoader}
         errorElement = {<CareerError/>}/>

      </Route>
       <Route path = "*" 
       element = {<NotFound/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      {/* Render your app components here */}
    </RouterProvider>
  ); 
}

export default App;
