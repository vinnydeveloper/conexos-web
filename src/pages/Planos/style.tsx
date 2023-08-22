import { css, styled } from "styled-components";


interface ContainerProps {
  planosCount: number
}

export const Container = styled.div<ContainerProps>`
  
  display: flex;
  justify-content: center;
  align-items: center;


  ${(props) => {
    return props.planosCount >= 4 && css`
       display: none;
    `
  }}

`