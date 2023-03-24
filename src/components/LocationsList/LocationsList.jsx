
import useStore from "../../utils/store";

const LocationsList = () => {

     const locations = useStore((state) => state.locations);

    return (
        <ul>
            {locations && (
                locations.map((item, index) => {
                    return (<li key={index}>
                        <h2>{item.CityDescription} </h2>
                        <p> {item.Description} </p>
                        {item.TotalMaxWeightAllowed !== "0" ? (<p> Total Max Weight Allowed: {item.TotalMaxWeightAllowed} kg </p>) : <p> Total Max Weight Allowed: No Limitation in weight </p>}
                        <h3> Schedule:  </h3>
                        <p> Monday: {item.Schedule.Monday} </p>
                        <p> Tuesday: {item.Schedule.Tuesday} </p>
                        <p> Wednesday: {item.Schedule.Wednesday} </p>
                        <p> Thursday: {item.Schedule.Thursday} </p>
                        <p> Friday: {item.Schedule.Friday} </p>
                        <p> Saturday: {item.Schedule.Saturday} </p>
                        <p> Sunday: {item.Schedule.Sunday} </p>

                    </li>)
                }))}
        </ul>)
}

export default LocationsList;
