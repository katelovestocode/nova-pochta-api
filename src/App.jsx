import  {Layout}  from "./components/Layout/Layout";
import  Home  from "./pages/Home/Home"
import { Routes } from "react-router-dom";
import { lazy } from 'react';
import { HashRouter as Route} from "react-router-dom";


const Locations = lazy(() => import('./pages/Locations/Locations'));

export default function App() {

  return (
    <>
    
      <Routes> 
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
          <Route path="locations" element={<Locations />}/> 
          <Route path="*" element={<Home/>}  />
        </Route>
      </Routes>
    
    </>
  );
}


