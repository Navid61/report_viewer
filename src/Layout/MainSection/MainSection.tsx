import React, { useState, useRef, useLayoutEffect } from "react";
import MainContent from "../../Views/Pages/MainContent/MainContent";

interface MainSectionProps {
  onSectionChange: (id: number, section: string) => void;
 
  onLoad: () => void;
}

const MainSection: React.FC<MainSectionProps> = ({ onSectionChange,  onLoad }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const mainContentCardRef = useRef<HTMLDivElement>(null);

  // Scroll the MainContentCard to the top when MainContent is loaded
  useLayoutEffect(() => {
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
      
      />
    </div>
  );
};

export default MainSection;
