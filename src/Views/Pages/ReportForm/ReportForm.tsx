import React from 'react';
import styled from 'styled-components';
import Editor from '../../../components/Editor/Editor'; // Adjust the path as needed to locate Editor.tsx

// Style wrapper for each inspection item section
const SectionWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  color:black;
  
 
`;

function UploadField({ label }: { label: string }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>{label}</label>
      <input type="file" accept="image/*, video/*" />
    </div>
  );
}

function InspectionSubItem({ title }: { title: string }) {
  return (
    <SectionWrapper>
      <h4>{title}</h4>
      <Editor /> {/* Using the Editor component here */}
      <UploadField label={`${title} Image/Video`} />
    </SectionWrapper>
  );
}

function ExteriorSection() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Exterior Inspection</h2>
      <InspectionSubItem title="Foundation - Cracks or Structural Issues" />
      <InspectionSubItem title="Walls and Siding - Material Condition" />
      <InspectionSubItem title="Walls and Siding - Paint Condition" />
      <InspectionSubItem title="Roof - Shingles or Tiles" />
      <InspectionSubItem title="Roof - Gutters and Flashing" />
      <InspectionSubItem title="Windows and Doors - Frames and Seals" />
    </div>
  );
}

function ReportForm() {
  return (
    <div>
      <h1>Property Inspection Report</h1>
      <ExteriorSection />
      {/* Additional sections like InteriorSection can be added here */}
    </div>
  );
}

export default ReportForm;
