import React, { useState, useRef, useEffect } from "react";
import MainContent from "../../Views/Pages/MainContent/MainContent";

interface MainSectionProps {
  onSectionChange: (id: number, section: string) => void;
  selectedMenuId:number | null;
  selectedMenuName:string | null;
 
  onLoad: () => void;
}

const MainSection: React.FC<MainSectionProps> = ({ onSectionChange,  onLoad ,selectedMenuId,selectedMenuName}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const mainContentCardRef = useRef<HTMLDivElement>(null);

  // Scroll the MainContentCard to the top when MainContent is loaded
  useEffect(() => {
    if (loaded && mainContentCardRef.current) {
      mainContentCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [loaded]);

  const handleContentLoaded = () => {
    setLoaded(true);
    onLoad();
  };

  const handleSectionChange = (id: number, section: string) => {
    onSectionChange(id, section);
  };

  return (
    <div ref={mainContentCardRef}>
      <MainContent
        onSectionChange={handleSectionChange}
        onLoad={handleContentLoaded}
        selectedMenuId={selectedMenuId}
        selectedMenuName={selectedMenuName}
      
      />
    </div>
  );
};

export default MainSection;
