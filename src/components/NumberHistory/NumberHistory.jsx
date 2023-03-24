
import useStore from "../../utils/store";

const NumberHistory = () => { 

    const listOfNumbers = useStore((state) => state.listOfNumbers);
    const deleteNumbers = useStore((state) => state.deleteNumbers);

    return (
        <>
            <ul>
                {listOfNumbers.map((item, index) => (<li key={index}> {item}</li>))}
            </ul>
        
        { listOfNumbers.length !== 0 ?  <button type="submit" onClick={ () => deleteNumbers()}>Clear History</button> : null} 
        </>
    )
}

export default NumberHistory;