import SearchForm from "../../components/SearchForm/SearchForm"
import DeliveryHistory from "../../components/DeliveryHistory/DeliveryHistory"
import NumberHistory from "../../components/NumberHistory/NumberHistory"


const Home = () => {
   

    return (
        <main>
                   
            <SearchForm /> 
            <NumberHistory /> 

            <DeliveryHistory/>      

        </main>

    
    )
  
}

export default Home;