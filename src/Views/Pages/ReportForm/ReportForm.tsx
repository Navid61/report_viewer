import styled from "styled-components";
import Editor from "../../../components/Editor/Editor"; // Adjust the path as needed to locate Editor.tsx
import React, { useEffect, useRef } from "react";

// Style wrapper for each inspection item section
const SectionWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  color: black;
`;

interface UploadFieldProps {
  label: string;
}

function UploadField({ label }: UploadFieldProps) {
  return (
    <div style={{ margin: "10px 0" }}>
      {" "}
      <label>{label}</label>{" "}
      <input type="file" accept="image/*, video/*" aria-label={label} />{" "}
    </div>
  );
}

const InspectionSubItem = React.memo(({ title }: { title: string }) => {
  return (
    <SectionWrapper>
      <h4>{title}</h4>
      <Editor /> {/* Using the Editor component here */}
      <UploadField label={`${title} Image/Video`} />
    </SectionWrapper>
  );
});

const ExteriorSection = React.memo(() => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Exterior Inspection</h2>
      <InspectionSubItem title="Foundation - Cracks or Structural Issues" />
      <InspectionSubItem title="Walls and Siding - Material Condition" />
      <InspectionSubItem title="Walls and Siding - Paint Condition" />
      <InspectionSubItem title="Roof - Shingles or Tiles" />
      <InspectionSubItem title="Roof - Gutters and Flashing" />
      <InspectionSubItem title="Windows and Doors - Frames and Seals" />
    </div>
  );
});

function InteriorSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Interior Inspection</h2>
      <InspectionSubItem title="Floors - Damage or Uneven Surfaces" />
      <InspectionSubItem title="Walls - Cracks or Paint Condition" />
      <InspectionSubItem title="Ceilings - Stains or Leaks" />
      <InspectionSubItem title="Stairways - Structural Safety" />
      <InspectionSubItem title="Doors - Hinges and Locks" />
      <InspectionSubItem title="Windows - Seals and Operation" />
    </div>
  );
}

function PlumbingSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Plumbing Inspection</h2>
      <InspectionSubItem title="Pipes - Leaks or Corrosion" />
      <InspectionSubItem title="Faucets - Functionality and Drips" />
      <InspectionSubItem title="Water Heater - Performance and Age" />
      <InspectionSubItem title="Drains - Blockages or Slow Flow" />
    </div>
  );
}

function ElectricalSection() {
  return (
    <div style={{ padding: "20px" }}>
      <InspectionSubItem title="Outlets - Proper Function and Safety" />
      <InspectionSubItem title="Switches - Functionality" />
      <InspectionSubItem title="Circuit Breaker - Panel Condition" />
      <InspectionSubItem title="Lighting Fixtures - Working Condition" />
    </div>
  );
}

function LivingRoomSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Living Room and Common Areas</h2>
      <InspectionSubItem title="Flooring and Carpeting - Wear, Scratches, or Damage" />
      <InspectionSubItem title="Lighting and Fixtures - Functionality of Lights, Fixtures, and Switches" />
      <InspectionSubItem title="Windows, Curtains/Blinds - Condition and Operation" />
    </div>
  );
}

function KitchenSection() {
  return (
    <div style={{ padding: "20px" }}>
      <InspectionSubItem title="Cabinets and Storage - Hinges and Drawers Operation and Wear" />
      <InspectionSubItem title="Cabinets and Storage - Water Damage Around Sink and Appliances" />
      <InspectionSubItem title="Appliances - Test Functionality and Inspect Seals/Connections (Refrigerator, Stove/Oven, Dishwasher, Microwave)" />
      <InspectionSubItem title="Plumbing - Sink and Faucets (Leaks, Water Pressure, Drainage)" />
      <InspectionSubItem title="Plumbing - Visible Plumbing Wear or Corrosion" />
      <InspectionSubItem title="Exhaust System - Ventilation to the Outside" />
      <InspectionSubItem title="Countertops and Surfaces - Inspect for Scratches, Chips, or Wear" />
    </div>
  );
}

function BathroomSection() {
  return (
    <div style={{ padding: "20px" }}>
      <InspectionSubItem title="Fixtures - Toilet (Flush Test, Leaks, and Stability)" />
      <InspectionSubItem title="Fixtures - Sink and Faucets (Water Pressure, Leaks, Drainage)" />
      <InspectionSubItem title="Fixtures - Shower/Bathtub (Drainage, Leaks, Secure Fixtures)" />
      <InspectionSubItem title="Walls and Tiles - Grout Condition (Mold, Cracks, Missing Grout)" />
      <InspectionSubItem title="Ventilation - Fan Functionality and Proper Venting to the Outside" />
      <InspectionSubItem title="Plumbing - Visible Pipes and Fittings (Leaks or Corrosion)" />
    </div>
  );
}

function BedroomsSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bedrooms</h2>
      <InspectionSubItem title="Flooring - Inspect for Wear, Scratches, or Damage" />
      <InspectionSubItem title="Closets - Doors and Shelving (Stability and Smooth Operation)" />
      <InspectionSubItem title="Electrical and Lighting - Outlets and Fixtures (Operation and Secure Fittings)" />
    </div>
  );
}

function LaundryRoomSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Laundry Room (if applicable)</h2>
      <InspectionSubItem title="Washer and Dryer - Test Functionality and Inspect Connections for Leaks" />
      <InspectionSubItem title="Water Connections - Check Hoses for Wear or Leaks" />
    </div>
  );
}

function AtticAndBasementSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Attic and Basement (if applicable)</h2>
      <InspectionSubItem title="Visible Cracks or Moisture - Inspect for Structural Damage or Water Infiltration" />
      <InspectionSubItem title="Condition - Verify Coverage and Intact Insulation" />
      <InspectionSubItem title="Wiring - Inspect Exposed Wiring for Signs of Damage" />
      <InspectionSubItem title="Signs of Infestation - Check for Evidence of Rodents or Insects" />
    </div>
  );
}

function GarageSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Garage (if applicable)</h2>
      <InspectionSubItem title="Automatic Doors - Test for Operation and Safety Features" />
      <InspectionSubItem title="Condition - Check for Cracks or Oil Stains" />
      <InspectionSubItem title="Functionality - Test for Proper Operation" />
    </div>
  );
}

function SafetyFeaturesSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Safety Features</h2>
      <InspectionSubItem title="Functionality - Test Each Device and Check for Proper Placement" />
      <InspectionSubItem title="Condition - Verify They Are Present, Charged, and Accessible" />
      <InspectionSubItem title="Stability - Check Handrails and Steps for Secure Attachment" />
    </div>
  );
}

function EnvironmentalAndExternalFactors() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Environmental and External Factors</h2>
      <InspectionSubItem title="Proximity to Hazards" />
      <InspectionSubItem title="Flood and Disaster Risk" />
      <InspectionSubItem title="Noise Levels" />
    </div>
  );
}

function OutdoorSpacesSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Outdoor Spaces (if applicable)</h2>
      <InspectionSubItem title="Condition of Lawn and Plants - Assess Maintenance Needs and Health" />
      <InspectionSubItem title="Functionality and Safety - Test for Proper Operation, Cleanliness, and Safety Measures" />
      <InspectionSubItem title="Condition and Stability - Inspect for Damage and Secure Installation" />
    </div>
  );
}

function AdditionalFeaturesSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Additional Features</h2>
      <InspectionSubItem title="Functionality - Test Devices Like Thermostats, Locks, and Lighting Systems" />
      <InspectionSubItem title="Condition - Inspect for Adequate Space and Any Signs of Wear" />
    </div>
  );
}

const sections = [
  { id: 1, title: "Exterior", component: <ExteriorSection /> },
  { id: 2, title: "Interior", component: <InteriorSection /> },
  { id: 3, title: "Plumbing", component: <PlumbingSection /> }, // No direct match
  { id: 4, title: "Electrical", component: <ElectricalSection /> }, // No direct match
  {
    id: 5,
    title: "Living Room and Common Areas",
    component: <LivingRoomSection />,
  },
  { id: 6, title: "Kitchen", component: <KitchenSection /> },
  { id: 7, title: "Bathroom", component: <BathroomSection /> },
  { id: 8, title: "Bedrooms", component: <BedroomsSection /> },
  { id: 9, title: "Laundry Room", component: <LaundryRoomSection /> },
  {
    id: 10,
    title: "Attic and Basement",
    component: <AtticAndBasementSection />,
  },
  { id: 11, title: "Garage", component: <GarageSection /> },
  {
    id: 12,
    title: "Safety Features",
    component: <SafetyFeaturesSection />,
  },
  {
    id: 13,
    title: "Environmental and External Factors",
    component: <EnvironmentalAndExternalFactors />,
  },
  {
    id: 14,
    title: "Outdoor Spaces",
    component: <OutdoorSpacesSection />,
  },
  {
    id: 15,
    title: "Additional Features",
    component: <AdditionalFeaturesSection />,
  },
];

interface ReportFormProps {
  onSectionChange: (id: number, section: string) => void;
}

function ReportForm({ onSectionChange }: ReportFormProps) {
  const sectionRefs = useRef(new Map());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.id} is visible` , entry);
            const section = sections.find(
              (sec) => sec.title === entry.target.id
            );
            if (section) {
           
              onSectionChange(section.id, section.title);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      {" "}
      <h1>Property Inspection Report</h1>{" "}
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.title}
          ref={(el) => sectionRefs.current.set(section.title, el)}
        >
          {" "}
          {section.component}{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default ReportForm;
