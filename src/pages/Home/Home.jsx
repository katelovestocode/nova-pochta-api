import SearchForm from "../../components/SearchForm/SearchForm"
import DeliveryHistory from "../../components/DeliveryHistory/DeliveryHistory"
import NumberHistory from "../../components/NumberHistory/NumberHistory"
import Container from "../../components/Container/Container"
import { Wrapper } from "./Home.styled"
import useStore from "../../utils/store";
import { Loader } from "../../components/Loader/Loader"

const Home = () => {

    const isLoading = useStore((state) => state.isLoading);

    return (
        <main>

            <Container> 
                   
            <SearchForm /> 
                
                {isLoading ? <Loader /> : (<Wrapper>
                    <NumberHistory />
                    <DeliveryHistory />
                </Wrapper>)}

            </Container>    

        </main>

    
    )
  
}

export default Home;