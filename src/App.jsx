import  {Layout}  from "./components/Layout/Layout";
import  Home  from "./pages/Home/Home"
import Locations from "./pages/Locations/Locations"
import { Route, Routes } from "react-router-dom";




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


