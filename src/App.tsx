import React, { useState, useCallback, Suspense } from "react";
import { MainContainer } from "./Layout/layoutStyles";

// Lazy-loaded components
const Header = React.lazy(() => import("./Layout/Header/Header"));
const Footer = React.lazy(() => import("./Layout/Footer/Footer"));
const Sidebar = React.lazy(() => import("./Layout/Sidebar/Sidebar"));
const MainSection = React.lazy(() => import("./Layout/MainSection/MainSection"));

function App() {
  const [currentSection, setCurrentSection] = useState<{
    id: number | null;
    name: string | null;
  }>({ id: null, name: null });

  const [selectedMenu, setSelectedMenu] = useState<{
    id: number | null;
    name: string | null;
  }>({ id: null, name: null });

  // Handlers
  const handleSectionChange = useCallback((id: number, section: string) => {
    setCurrentSection({ id, name: section });
  }, []);

  const handleMenuSelected = useCallback((menuId: number, menuName: string) => {
    setSelectedMenu({ id: menuId, name: menuName });
  }, []);

  const handleLoad = useCallback((componentName: string) => {
    console.log(`${componentName} has been loaded`);
  }, []);

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Header onLoad={() => handleLoad("Header")} />
        <Sidebar
          activeSection={currentSection.name}
          item={currentSection.id}
          onLoad={() => handleLoad("Sidebar")}
          onMenuSelected={handleMenuSelected}
        />
        <MainSection
          onSectionChange={handleSectionChange}
          onLoad={() => handleLoad("MainSection")}
          selectedMenuId={selectedMenu.id}
          selectedMenuName={selectedMenu.name}
        />
        <Footer onLoad={() => handleLoad("Footer")} />
      </Suspense>
    </MainContainer>
  );
}

export default App;
