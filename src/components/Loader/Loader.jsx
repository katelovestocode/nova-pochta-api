import { Puff } from 'react-loader-spinner';
import { Container } from './Loader.styled';


export const Loader = () => {
    return (
    
<Container>
        <Puff
        height="175"
        width="175"
        radius={1}
        color="#d90429"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
</Container>


    )
}