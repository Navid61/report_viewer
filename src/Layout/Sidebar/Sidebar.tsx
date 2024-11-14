// Sidebar.tsx

import React from 'react';
import { SidebarCard } from '../layoutStyles';

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
        <div
          key={section}
          style={{
           
            padding: '1rem',
            fontWeight: activeSection === section ? 'bold' : 'normal',
            color: activeSection === section ? 'blue' : 'black',
          }}
        >
          {section}
        </div>
      ))}
    </SidebarCard>
  );
};

export default Sidebar;
