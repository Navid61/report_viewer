import React, { useState, Suspense } from "react";
import { MainContainer } from "./Layout/layoutStyles";

const Header = React.lazy(() => import("./Layout/Header/Header"));
const Footer = React.lazy(() => import("./Layout/Footer/Footer"));
const Sidebar = React.lazy(() => import("./Layout/Sidebar/Sidebar"));
const MainSection = React.lazy(() => import("./Layout/MainSection/MainSection"));

function App() {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSectionChange = (id: number, section: string) => {
    setCurrentId(id);
    setCurrentSection(section);
  };

  const handleLoad = () => {
    console.log("A component has been loaded");
  };

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Header onLoad={handleLoad} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar activeSection={currentSection} item={currentId} onLoad={handleLoad} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection
          onSectionChange={handleSectionChange}
          onLoad={handleLoad}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer onLoad={handleLoad} />
      </Suspense>
    </MainContainer>
  );
}

export default App;
