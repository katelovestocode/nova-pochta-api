import styled from 'styled-components';


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Input = styled.input`
min-width: 150px;
padding: ${p => p.theme.space[2]}px;
border-radius:${p => p.theme.radii.tiny};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.darkerGray};
font-size:  ${p => p.theme.fontSizes.sm};

 &:focus {
 outline:  ${p => p.theme.colors.darkerGray} solid 2px;
 }

 @media (min-width: 780px) {
  min-width: 350px;
  }
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[6]}px;
color: ${p => p.theme.colors.white};
background-color: ${p => p.theme.colors.lightRed};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
width: 130px;
padding: ${p => p.theme.space[2]}px;
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

export const Warning = styled.div`
padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.red};
font-size: ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold};
`