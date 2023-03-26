import styled from 'styled-components';


export const Button = styled.button`
margin-top: ${p => p.theme.space[6]}px;
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
width: 130px;
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