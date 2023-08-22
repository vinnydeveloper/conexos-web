import styled from 'styled-components';
import THEME from '../../theme';

export const Container = styled.header`
  background: ${THEME.COLORS.PRIMARY_DARK};
  color: ${THEME.COLORS.WHITE};
  font-family: 'Raleway';
  padding: 0 50px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    color: ${THEME.COLORS.WHITE};
    text-decoration: none;
    font-weight: bold;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 37px;
  }

`;


export const FooterText = styled.div` `