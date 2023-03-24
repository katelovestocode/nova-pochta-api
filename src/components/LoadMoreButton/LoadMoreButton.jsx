import useStore from "../../utils/store";

const LoadMoreButton = () => { 

      
    const totalCount = useStore((state) => state.totalCount);
    const perPage = useStore((state) => state.perPage);
    const loadMore = useStore((state) => state.loadMore);

    return (
        
        <>
             {totalCount >= perPage &&  <button type="submit" onClick={()=> loadMore()}>Load More</button> }
        
        </>
    )
}

export default LoadMoreButton;