import { styled } from "styled-components"



export const Horizontal = styled.div`
    display:flex;
    flex-direction:row;

    
`

export const CenteredHorizontal = styled(Horizontal)`
    justify-content:center;
`;


export const Vertical = styled.div`
    display:flex;
    flex-direction:column;
`;
export const CenteredVertical = styled(Vertical)`
    align-items:center;
`
