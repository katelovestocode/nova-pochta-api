import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Input = styled.input`
min-width: 350px;
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
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[6]}px;
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
width: 150px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.lightRed};
border-radius:${p => p.theme.radii.tiny};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${p => p.theme.colors.redAccent};
    color: ${p => p.theme.colors.white};
  }

`

export const Warning = styled.div`

padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.red};
font-size: ${p => p.theme.fontSizes.sm};
font-weight: ${p => p.theme.fontWeights.bold};
`