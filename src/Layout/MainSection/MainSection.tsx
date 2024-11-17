import React, { useRef } from "react";
import MainContent from "../../Views/Pages/MainContent/MainContent";

interface MainSectionProps {
  onSectionChange: (id: number, section: string) => void;
  selectedMenuId: number | null;
  selectedMenuName: string | null;
  onLoad: () => void;
}

const MainSection: React.FC<MainSectionProps> = ({ 
  onSectionChange, 
  onLoad, 
  selectedMenuId, 
  selectedMenuName 
}) => {
  const mainContentCardRef = useRef<HTMLDivElement>(null);

  // Scroll the MainContentCard to the top when the content is loaded
  const onContentLoad = () => {
    if (mainContentCardRef.current) {
      mainContentCardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onLoad();
  };

  return (
    <div ref={mainContentCardRef}>
      <MainContent
        onSectionChange={onSectionChange}
        onLoad={onContentLoad}
        selectedMenuId={selectedMenuId}
        selectedMenuName={selectedMenuName}
      />
    </div>
  );
};

export default MainSection;
