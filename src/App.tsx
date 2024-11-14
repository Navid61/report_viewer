import React from "react";
import { MainContainer } from "./Layout/layoutStyles";


const Header = React.lazy(()=>import("./Layout/Header/Header"))

const Footer = React.lazy(()=>import("./Layout/Footer/Footer"))

const Sidebar = React.lazy(()=>import("./Layout/Sidebar/Sidebar"))
const MainSection = React.lazy(()=>import("./Layout/MainSection/MainSection"))

function App() {
  return (
    <>
    <MainContainer>
 <Header/>
    <Sidebar/>
    <MainSection/>
    <Footer/>
    </MainContainer>
   
   
    
    </>
  );
}

export default App;
