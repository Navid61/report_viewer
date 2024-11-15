import React from 'react';
import styled from 'styled-components';
import { SidebarCard, StyledSection } from '../layoutStyles';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const sections = [
    'Exterior',
    'Interior General',
    'Living Room and Common Area',
    'Kitchen Bathroom',
    

  ];

  return (
    <SidebarCard>
      {sections.map((section) => (
        <StyledSection key={section} active={activeSection === section}>
          {section}
        </StyledSection>
      ))}
    </SidebarCard>
  );
};

export default Sidebar;
