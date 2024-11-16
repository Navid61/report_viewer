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
  background-color: ${({ $isActive }) => ($isActive ? "#FBF8DD" : "#fafafa")};
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

// Main Form Component with Intersection Observer
function ReportForm({ onSectionChange }: { onSectionChange: (id: number, section: string) => void }) {
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [loadedSections, setLoadedSections] = useState<number>(0); // To track number of loaded sections
  const totalSections = sections.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((sec) => sec.id.toString() === entry.target.id);
            if (section) {
              setActiveSection(section.title);
              onSectionChange(section.id, section.title);
              // Increment the loaded sections count when a section is fully loaded
              setLoadedSections((prev) => prev + 1);
            }
          }
        });
      },
      { threshold: 0.4 } // Adjusted threshold for better detection of large sections
    );

    // Observe all sections
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => observer.disconnect();
  }, [onSectionChange]);

  useEffect(() => {
    if (loadedSections === totalSections) {
      // Scroll to top only once after all items are loaded
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Ensure it happens after all DOM updates
    }
  }, [loadedSections, totalSections]);

  return (
    <div>
      <h1>Property Inspection Report</h1>
      {sections.map((section) => (
        <div
          key={section.id}
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
