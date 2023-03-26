import useStore from "../../utils/store";
import {Button} from "./LoadMoreButton.styled"

const LoadMoreButton = () => { 

      
    const totalCount = useStore((state) => state.totalCount);
    const perPage = useStore((state) => state.perPage);
    const loadMore = useStore((state) => state.loadMore);

    return (
        
        <>
             {totalCount >= perPage &&  <Button type="submit" onClick={()=> loadMore()}>Load More</Button> }
        
        </>
    )
}

export default LoadMoreButton;