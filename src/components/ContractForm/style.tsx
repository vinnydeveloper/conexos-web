import styled from 'styled-components';
import THEME from '../../theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 72px;
    border: 1px solid;
    border-radius: 20px;


    form{
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 15px;
    }

  

    h1{
      color: ${THEME.COLORS.PRIMARY_DARK};
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
  `

export const ContainerTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const Label = styled.label`
  
`