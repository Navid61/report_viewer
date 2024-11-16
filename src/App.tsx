import React, { useState, Suspense,useEffect } from "react";
import { MainContainer } from "./Layout/layoutStyles";

const Header = React.lazy(() => import("./Layout/Header/Header"));
const Footer = React.lazy(() => import("./Layout/Footer/Footer"));
const Sidebar = React.lazy(() => import("./Layout/Sidebar/Sidebar"));
const MainSection = React.lazy(() => import("./Layout/MainSection/MainSection"));

function App() {
  const [currentId, setCurrentId] = useState<number| null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionChange = (id: number, section: string) => {
    setCurrentId(id);
    setCurrentSection(section);
  };

  useEffect(() => { window.scrollTo(0, 0); // Scroll to the top of the page on mount
     }, []);

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar activeSection={currentSection} item={currentId} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection onSectionChange={handleSectionChange} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </MainContainer>
  );
}

export default App;
