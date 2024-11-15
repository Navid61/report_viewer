import styled from "styled-components";
import Editor from "../../../components/Editor/Editor"; // Adjust path as needed
import React, { useState, useEffect, useRef } from "react";

// Styled Wrapper for Sections
const SectionWrapper = styled.div<{ isActive: boolean }>`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? "#FBF8DD" : "#fafafa")};
  transition: background-color 0.3s ease;
`;

interface UploadFieldProps {
  label: string;
}

function UploadField({ label }: UploadFieldProps) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label>{label}</label>
      <input type="file" accept="image/*, video/*" aria-label={label} />
    </div>
  );
}

// Individual Sub-Item Component
const InspectionSubItem = React.memo(({ title }: { title: string }) => (
  <SectionWrapper isActive={false}>
    <h4>{title}</h4>
    <Editor />
    <UploadField label={`${title} Image/Video`} />
  </SectionWrapper>
));

// Component to Handle Large Sections with Dynamic Chunk Loading
const DynamicSection = ({ items, title }: { items: string[]; title: string }) => {
  const [visibleItems, setVisibleItems] = useState(5); // Initial visible items
  const chunkSize = 5;

  const loadMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + chunkSize, items.length));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      {items.slice(0, visibleItems).map((item, index) => (
        <InspectionSubItem key={index} title={item} />
      ))}
      {visibleItems < items.length && (
        <button onClick={loadMoreItems}>Load More</button>
      )}
    </div>
  );
};

// Section Data
const sections = [
  {
    id: 1,
    title: "Exterior",
    items: [
      "Foundation - Cracks or Structural Issues",
      "Walls and Siding - Material Condition",
      "Walls and Siding - Paint Condition",
      "Roof - Shingles or Tiles",
      "Roof - Gutters and Flashing",
      "Windows and Doors - Frames and Seals",
    ],
  },
  {
    id: 2,
    title: "Interior",
    items: [
      "Floors - Damage or Uneven Surfaces",
      "Walls - Cracks or Paint Condition",
      "Ceilings - Stains or Leaks",
      "Stairways - Structural Safety",
      "Doors - Hinges and Locks",
      "Windows - Seals and Operation",
    ],
  },
  {
    id: 3,
    title: "Plumbing",
    items: [
      "Pipes - Leaks or Corrosion",
      "Faucets - Functionality and Drips",
      "Water Heater - Performance and Age",
      "Drains - Blockages or Slow Flow",
    ],
  },
  {
    id: 4,
    title: "Electrical",
    items: [
      "Outlets - Proper Function and Safety",
      "Switches - Functionality",
      "Circuit Breaker - Panel Condition",
      "Lighting Fixtures - Working Condition",
    ],
  },
  
  
  {
    id: 5,
    title: "Living Room and Common Areas",
    items: [
      "Flooring and Carpeting - Wear, Scratches, or Damage",
      "Lighting and Fixtures - Functionality of Lights, Fixtures, and Switches",
      "Windows, Curtains/Blinds - Condition and Operation",
    ],
  },
  
  {
    id: 6,
    title: "Kitchen",
    items: [
      "Cabinets and Storage - Hinges and Drawers Operation and Wear",
      "Cabinets and Storage - Water Damage Around Sink and Appliances",
      "Appliances - Test Functionality",
      "Plumbing - Sink and Faucets (Leaks, Water Pressure, Drainage)",
      "Plumbing - Visible Plumbing Wear or Corrosion",
      "Exhaust System - Ventilation to the Outside",
      "Countertops and Surfaces - Inspect for Scratches, Chips, or Wear",
    ],
  },
  {
    id: 7,
    title: "Bathroom",
    items: [
      "Fixtures - Toilet (Flush Test, Leaks, and Stability)",
      "Fixtures - Sink and Faucets (Water Pressure, Leaks, Drainage)",
      "Fixtures - Shower/Bathtub (Drainage, Leaks, Secure Fixtures)",
      "Walls and Tiles - Grout Condition (Mold, Cracks, Missing Grout)",
      "Ventilation - Fan Functionality",
      "Plumbing - Visible Pipes and Fittings",
    ],
  },
  {
    id: 8,
    title: "Bedrooms",
    items: [
      "Flooring - Inspect for Wear, Scratches, or Damage",
      "Closets - Doors and Shelving (Stability and Smooth Operation)",
      "Electrical and Lighting - Outlets and Fixtures (Operation and Secure Fittings)",
    ],
  },
  {
    id: 9,
    title: "Laundry Room",
    items: [
      "Washer and Dryer - Test Functionality and Inspect Connections for Leaks",
      "Water Connections - Check Hoses for Wear or Leaks",
    ],
  },
  {
    id: 10,
    title: "Attic and Basement",
    items: [
      "Visible Cracks or Moisture - Inspect for Structural Damage or Water Infiltration",
      "Condition - Verify Coverage and Intact Insulation",
      "Wiring - Inspect Exposed Wiring for Signs of Damage",
      "Signs of Infestation - Check for Evidence of Rodents or Insects",
    ],
  },
  {
    id: 11,
    title: "Garage",
    items: [
      "Automatic Doors - Test for Operation and Safety Features",
      "Condition - Check for Cracks or Oil Stains",
      "Functionality - Test for Proper Operation",
    ],
  },
  {
    id: 12,
    title: "Safety Features",
    items: [
      "Functionality - Test Each Device and Check for Proper Placement",
      "Condition - Verify They Are Present, Charged, and Accessible",
      "Stability - Check Handrails and Steps for Secure Attachment",
    ],
  },
  {
    id: 13,
    title: "Environmental and External Factors",
    items: [
      "Proximity to Hazards",
      "Flood and Disaster Risk",
      "Noise Levels",
    ],
  },
  {
    id: 14,
    title: "Outdoor Spaces",
    items: [
      "Condition of Lawn and Plants - Assess Maintenance Needs and Health",
      "Functionality and Safety - Test for Proper Operation, Cleanliness, and Safety Measures",
      "Condition and Stability - Inspect for Damage and Secure Installation",
    ],
  },
  {
    id: 15,
    title: "Additional Features",
    items: [
      "Functionality - Test Devices Like Thermostats, Locks, and Lighting Systems",
      "Condition - Inspect for Adequate Space and Any Signs of Wear",
    ],
  },
];


// Main Form Component with Intersection Observer
function ReportForm({ onSectionChange }: { onSectionChange: (id: number, section: string) => void }) {
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((sec) => sec.title === entry.target.id);
            if (section) {
              setActiveSection(section.title);
              onSectionChange(section.id, section.title);
            }
          }
        });
      },
      { threshold: 0.4 } // Adjusted threshold for better detection of large sections
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <div>
      <h1>Property Inspection Report</h1>
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.title}
          ref={(el) => el && sectionRefs.current.set(section.title, el)}
        >
          <SectionWrapper isActive={activeSection === section.title}>
            <DynamicSection title={section.title} items={section.items} />
          </SectionWrapper>
        </div>
      ))}
    </div>
  );
}

export default ReportForm;
