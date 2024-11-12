
import styled from "styled-components";

export const MainContainer = styled.div`
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
`;


// Header, Sidebar, Main Content, and Footer Components

export const HeaderCard = styled.header`
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  width:100vw;
`;

export const SidebarCard = styled.aside`
  grid-area: sidebar;
  background-color: #555;
  color: white;
  padding: 1rem;
  width:17vw;
  @media (max-width: 768px) {
    display: none; /* Hide sidebar on smaller screens */
  }
`;

export const MainContentCard = styled.main`
  grid-area: main;
  padding: 1rem;
  width:83vw;
`;

export const FooterCard = styled.footer`
  grid-area: footer;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  width:100vw;
`;






