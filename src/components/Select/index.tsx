import { styled } from "styled-components";
import THEME from "../../theme";

const Select = styled.select`
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${THEME.COLORS.SECONDARY_TEXT};
    outline: 0;
    padding: 5px;
`

export default Select