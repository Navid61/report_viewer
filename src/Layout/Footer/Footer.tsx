import React, { useEffect } from 'react';
import { FooterCard } from '../layoutStyles';

interface FooterProps {
  onLoad: () => void;
}

const Footers: React.FC<FooterProps> = ({ onLoad }) => {
  useEffect(() => {
    // Trigger onLoad when the component has fully mounted
    onLoad();
  }, [onLoad]);

  return (
    <FooterCard>
      <p>Hello</p>
    </FooterCard>
  );
};

export default Footers;
