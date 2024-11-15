import React, { useEffect, useState } from "react";
import ReportForm from "../ReportForm/ReportForm";

interface MainContentProps {
  onSectionChange: (id: number, section: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onSectionChange }) => {
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
    <>
      <ReportForm onSectionChange={handleSectionChange} />
    </>
  );
};

export default MainContent;
