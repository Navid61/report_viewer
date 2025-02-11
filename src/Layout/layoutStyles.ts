import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, content, footer */
  grid-template-columns: 17% 1fr;
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
  color: black;
  gap:2rem;
`;

// Header, Sidebar, Main Content, and Footer Components

export const HeaderCard = styled.header`
  display: grid;
  grid-template-columns: auto;
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  
`;

export const SidebarCard = styled.aside`
background-color:#FEFAF6;
  grid-area: sidebar;
  color: white;
  padding: 1rem;
  width: 17vw;
  max-height: 100vh;
  top: 4rem; /* Ensure it sticks at the top */
  position: sticky;
  @media (max-width: 768px) {
    display: none; /* Hide sidebar on smaller screens */
  }
`;


export const StyledSection = styled.div<{ $active: boolean }>`
  padding: 1rem;
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  color: ${({ $active }) => ($active ? "blue" : "black")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* You can add any styling based on $id here if needed */
 &:hover {
 background-color:#D0E8C5;
 font-weight:bold;
 font-size: 1.5em;
 }
    
`;

/**      */

export const MainContentCard = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr; // 3 columns
  
  padding: 1rem;
  width: 82vw;
  height: 100vh;
  overflow-y: auto;
  border: 1px solid red;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column on smaller screens
  }
`;


export const FooterCard = styled.footer`
  display: grid;
  grid-template-columns: auto;
  grid-area: footer;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
`;
