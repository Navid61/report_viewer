import React, { useEffect, useState } from "react";
import { MainContentCard } from "../layoutStyles";
import MainContent from "../../Views/Pages/MainContent/MainContent";

interface MainContentProps {
  onSectionChange: (id: number, section: string) => void;
}

const MainSection: React.FC<MainContentProps> = ({ onSectionChange }) => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('');

  useEffect(() => {
    if (currentId !== null && currentSection !== '') {
      onSectionChange(currentId, currentSection);
    }
  }, [currentId, currentSection, onSectionChange]);

  const handleSectionChange = (id: number, section: string) => {
    setCurrentId(id);
    setCurrentSection(section);
  };

  return (
    <MainContentCard>
      <MainContent onSectionChange={handleSectionChange} />
    </MainContentCard>
  );
};

export default MainSection;
