import styled from 'styled-components';

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-top: 20px;
gap: 20px;

  @media (min-width: 780px) {
  
 }
`


export const ListItem = styled.li`
background-color: ${p => p.theme.colors.gray};
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
width: 250px;
height: 350px;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
border-radius:${p => p.theme.radii.tiny};
border: 0px solid;
`

export const Wrapper = styled.div` 
`

export const City = styled.h2`
color: ${p => p.theme.colors.redAccent};
`
export const Schedule = styled.h3`
color: ${p => p.theme.colors.redAccent};
`
export const Department = styled.p`
color: ${p => p.theme.colors.dark};
font-size: 17px;
margin-bottom: 10px;
`

export const Day = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.dark};
`
export const Hours = styled.span`
font-weight: ${p => p.theme.fontWeights.medium};
color: ${p => p.theme.colors.dark};
`
