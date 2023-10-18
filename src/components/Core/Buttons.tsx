import { styled } from "styled-components";
import { COLORS } from "../../constants";


const PrimaryButton = styled.button`
    padding: 8px;
    color: ${COLORS.light};
    background:${COLORS.primary};
    font-size:14px;
    width:340px;
`;



export { PrimaryButton };