import useStore from "../../utils/store";
import {Container, Item} from "./DeliveryHistory.styled"

const DeliveryHistory = () => { 

    const ttnInfo = useStore((state) => state.ttnInfo);

    return (

        ttnInfo && (
            
            <> 
                
            {ttnInfo.map((item, index) => { return (

                <Container key={index}>
                    <Item> Delivery Status: {item.Status && (item.Status)} </Item>
                    
                    <Item> Sent From: {item.WarehouseSender && ( item.WarehouseSender)} </Item>
                    <Item> Received at: {item.WarehouseRecipient && (item.WarehouseRecipient)}</Item>
                   
                </Container> )})}
            
            </>)     
    )

}

export default DeliveryHistory;