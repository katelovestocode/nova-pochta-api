import DeptSearchForm from "../../components/DeptSearchForm/DeptSearchForm"
import LocationsList from "../../components/LocationsList/LocationsList";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Container from "../../components/Container/Container"
import { Loader } from "../../components/Loader/Loader";
import useStore from "../../utils/store";


const Locations = () => { 

    const isLoading = useStore((state) => state.isLoading);

return (
    <main>
    
    <Container> 
    <DeptSearchForm />
    {isLoading ? <Loader /> : (<> <LocationsList /> <LoadMoreButton/> </>)}
    </Container>
    </main>)
  
}

export default Locations;