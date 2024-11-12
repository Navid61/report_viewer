import styled from "styled-components";




export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, content, footer */
  grid-template-columns: 17% 83%;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
  transition: grid-template-columns 0.3s ease;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas: 
      "header"
      "main"
      "footer";
  }
      color:black;
`;




