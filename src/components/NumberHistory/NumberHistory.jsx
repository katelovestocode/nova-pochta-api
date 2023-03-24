
import useStore from "../../utils/store";
import {List, ListItem, Wrapper, Button} from "./NumberHistory.styled"

const NumberHistory = () => { 

    const listOfNumbers = useStore((state) => state.listOfNumbers);
    const deleteNumbers = useStore((state) => state.deleteNumbers);

    return (
        <>
            <Wrapper> 
            <List>
                {listOfNumbers.map((item, index) => (<ListItem key={index}> {item}</ListItem>))}
            </List>
        
        { listOfNumbers.length !== 0 ?  <Button type="submit" onClick={ () => deleteNumbers()}>Clear History</Button> : null} 
        
            </Wrapper>
            </>
    )
}

export default NumberHistory;