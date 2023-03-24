import PropTypes from 'prop-types';
import {ContainerStyle} from './Container.styled';


const Container = ({ children }) => {   return <ContainerStyle >{children}</ContainerStyle>;
}


export default Container;
  
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

