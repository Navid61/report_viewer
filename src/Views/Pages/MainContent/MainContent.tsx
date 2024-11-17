import React, { useEffect } from "react";
import ReportForm from "../ReportForm/ReportForm";

interface MainContentProps {
  onSectionChange: (id: number, section: string) => void;
  onLoad: () => void;
  selectedMenuId:number|null;
  selectedMenuName:string|null;
 
}

const MainContent: React.FC<MainContentProps> = ({ onSectionChange, onLoad , selectedMenuId,selectedMenuName}) => {
  useEffect(() => {
    onLoad(); // Trigger onLoad when MainContent is mounted
  }, [onLoad]);

  return (
    <div>
      <ReportForm
        onSectionChange={onSectionChange}
        selectedMenuId={ selectedMenuId}
        selectedMenuName={selectedMenuName}
      
      />
    </div>
  );
};

export default MainContent;
