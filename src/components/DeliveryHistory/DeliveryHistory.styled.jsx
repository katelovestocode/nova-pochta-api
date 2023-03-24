
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap: 30px;
padding: 10px 15px;
background-color: ${p => p.theme.colors.gray};
border-radius:${p => p.theme.radii.tiny};
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
width: 500px;

`

export const Item = styled.p`
font-size:  ${p => p.theme.fontSizes.sm};

`