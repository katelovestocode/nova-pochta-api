
import styled from 'styled-components';


export const List = styled.ul`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.white};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ListItem = styled.li`
font-size:  ${p => p.theme.fontSizes.s};
color: ${p => p.theme.colors.dark};
display: flex;
padding: 10px 15px;
margin-bottom: 10px;
background-color: ${p => p.theme.colors.gray};
border-radius:${p => p.theme.radii.tiny};
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

min-width: 180px;


@media (min-width: 780px) {
  width: 250px;
  font-size:  ${p => p.theme.fontSizes.sm};
 }

 @media (min-width: 1200px) {
  width: 300px;
 }

`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
width: 120px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.lightRed};
border-radius:${p => p.theme.radii.tiny};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${p => p.theme.colors.redAccent};
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: 780px) {
  width: 150px;
  font-size:  ${p => p.theme.fontSizes.sm};
 }

`