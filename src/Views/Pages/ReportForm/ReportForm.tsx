import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { sections } from "../../../data/section";
import Editor from "../../../components/Editor/Editor"; // Assuming it's defined elsewhere

// Styled Wrapper for Sections
const SectionWrapper = styled.div<{ $isActive: boolean }>`
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: ${({ $isActive }) => ($isActive ? "blue" : "#fafafa")};
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
  <SectionWrapper $isActive={false}>
    <h4>{title}</h4>
    <Editor />
    <UploadField label={`${title} Image/Video`} />
  </SectionWrapper>
));

// Component to Handle Large Sections with Dynamic Chunk Loading
const DynamicSection = ({ items, title }: { items: string[]; title: string }) => {
  const [visibleItems, setVisibleItems] = useState(6); // Initial visible items
  const chunkSize = 3;

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

// Main Form Component using scroll and getBoundingClientRect
function ReportForm({ onSectionChange }: { onSectionChange: (id: number, section: string) => void }) {
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let closestSection: string | null = null;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((el, id) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection) {
        const section = sections.find((sec) => sec.id.toString() === closestSection);
        if (section && section.title !== activeSection) {
          setActiveSection(section.title);
          onSectionChange(section.id, section.title);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onSectionChange, activeSection]);

  useEffect(() => {
    // Scroll to top after the initial render
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Property Inspection Report</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          id={section.id.toString()}
          ref={(el) => {
            if (el) sectionRefs.current.set(section.id.toString(), el);
          }}
        >
          <SectionWrapper $isActive={activeSection === section.title}>
            <DynamicSection title={section.title} items={section.items} />
          </SectionWrapper>
        </div>
      ))}
    </div>
  );
}

export default ReportForm;
