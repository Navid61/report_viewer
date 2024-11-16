import React, { useEffect } from 'react';
import { HeaderCard } from '../layoutStyles';

interface HeaderProps {
  onLoad: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoad }) => {
  useEffect(() => {
    // Trigger onLoad when the component has fully mounted
    onLoad();
  }, [onLoad]);

  return (
    <HeaderCard>
      <p>Header</p>
    </HeaderCard>
  );
};

export default Header;
