import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.space[5]}px;

`
export const Header = styled.header`
padding: 40px;
border-bottom: ${p => p.theme.colors.borderColor} 1px solid;
background-color: #ffa5ba;
`

export const Navigation = styled.nav`
display: flex; 
gap: 60px;
`
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius:${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  min-width: 100px;
 

  &.active {
    color: ${p => p.theme.colors.red};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.lightRed};
  }
`;