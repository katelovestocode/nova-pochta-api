import useStore from "../../utils/store";

const DeliveryHistory = () => { 

    const ttnInfo = useStore((state) => state.ttnInfo);

    return (

        ttnInfo && (
            
            <> 
                
            {ttnInfo.map((item, index) => { return (

                <div key={index}>
                    <p> Delivery Status: {item.Status && (item.Status)} </p>
                    
                    <p> Sent From: {item.WarehouseSender && ( item.WarehouseSender)} </p>
                    <p> Received at: {item.WarehouseRecipient && (item.WarehouseRecipient)}</p>
                   
                </div> )})}
            
            </>)     
    )

}

export default DeliveryHistory;