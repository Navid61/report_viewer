import React from "react";
import { Container } from "./styles";


const Header = React.lazy(()=>import("./Layout/Header/Header"))

const Footer = React.lazy(()=>import("./Layout/Footer/Footer"))

const Sidebar = React.lazy(()=>import("./Layout/Sidebar/Sidebar"))
const MainSection = React.lazy(()=>import("./Layout/MainSection/MainSection"))

function App() {
  return (
    <>
    <Container>
 <Header/>
    <Sidebar/>
    <MainSection/>
    <Footer/>
    </Container>
   
   
    
    </>
  );
}

export default App;
