import React, { useEffect } from "react";
import { SidebarCard, StyledSection } from "../layoutStyles";

interface SidebarProps {
  item: number | null;
  activeSection: string | null;
  onLoad: () => void;
  // onMenuSelected: (menuId: number, menuName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({ item, activeSection, onLoad }) => {
  const sections = [
    { id: 1, title: "Exterior" },
    { id: 2, title: "Interior" },
    { id: 3, title: "Plumbing" },
    { id: 4, title: "Electrical" },
    { id: 5, title: "Living Room and Common Areas" },
    { id: 6, title: "Kitchen" },
    { id: 7, title: "Bathroom" },
    { id: 8, title: "Bedrooms" },
    { id: 9, title: "Laundry Room" },
    { id: 10, title: "Attic and Basement" },
    { id: 11, title: "Garage" },
    { id: 12, title: "Safety Features" },
    { id: 13, title: "Environmental and External Factors" },
    { id: 14, title: "Outdoor Spaces" },
    { id: 15, title: "Additional Features" },
  ];

  const isActive = (sectionId: number, sectionTitle: string) => {
    return activeSection === sectionTitle && item === sectionId;
  };

  // const handleMenuSelected = (menuId: number, menuName: string) => {
   
   
  //     onMenuSelected(menuId, menuName);
    
   
  // };

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <SidebarCard>
      {sections.map((section) => (
        <StyledSection
          key={section.id}
          $active={isActive(section.id, section.title)}
          // onClick={() => handleMenuSelected(section.id, section.title)}
        >
          {section.title}
        </StyledSection>
      ))}
    </SidebarCard>
  );
});

export default Sidebar;
