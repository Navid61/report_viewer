import React, { useState, ReactNode } from 'react';

interface DropDownProps {
  label: string;
  children: ReactNode;
}

export default function DropDown({ label, children }: DropDownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
      </button>
      {isOpen && <div className="dropdown-menu">{children}</div>}
    </div>
  );
}

interface DropDownItemProps {
  children: ReactNode;
  onClick: () => void;
}

export function DropDownItem({ children, onClick }: DropDownItemProps): JSX.Element {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
}
