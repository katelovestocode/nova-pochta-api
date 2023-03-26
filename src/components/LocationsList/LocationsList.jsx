
import useStore from "../../utils/store";
import {List, ListItem, City, Department, Schedule, Day, Hours, Wrapper} from "./LocationsList.styled"

const LocationsList = () => {

     const locations = useStore((state) => state.locations);

    return (
        <List>
            {locations && (
                locations.map((item, index) => {
                    return (<ListItem key={index}>
                        <Wrapper>
                        <City>{item.CityDescription} </City>
                        <Department> {item.Description} </Department>
                        
                        </Wrapper>
                        
                        <Wrapper> 
                        <Schedule> Schedule:  </Schedule>
                        <Day> Monday: <Hours>{item.Schedule.Monday} </Hours> </Day>
                        <Day> Tuesday: <Hours>{item.Schedule.Tuesday} </Hours> </Day>
                        <Day> Wednesday: <Hours> {item.Schedule.Wednesday}</Hours> </Day>
                        <Day> Thursday: <Hours> {item.Schedule.Thursday}</Hours> </Day>
                        <Day> Friday: <Hours> {item.Schedule.Friday}</Hours> </Day>
                        <Day> Saturday: <Hours>{item.Schedule.Saturday} </Hours> </Day>
                        <Day> Sunday: <Hours>{item.Schedule.Sunday} </Hours> </Day>
                        </Wrapper>
                    </ListItem>)
                }))}
        </List>)
}

export default LocationsList;
