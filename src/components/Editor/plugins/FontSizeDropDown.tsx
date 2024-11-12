import React, { useCallback } from 'react';
import styled from 'styled-components';
import { LexicalEditor } from 'lexical';
import { $getSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection';

const FONT_SIZE_OPTIONS: [string, string][] = [
  ['10px', '10px'],
  ['12px', '12px'],
  ['14px', '14px'],
  ['16px', '16px'],
  ['18px', '18px'],
  ['20px', '20px'],
];

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownButton = styled.button`
color:black;
  padding: 8px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const DropDownList = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;
  ${DropDownContainer}:hover & {
    display: block;
  }
`;

const DropDownItem = styled.div<{ selected: boolean }>`
  padding: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#f1f1f1' : 'transparent')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

function FontSizeDropDown({
  editor,
  selectedSize,
}: {
  editor: LexicalEditor;
  selectedSize: string;
}): JSX.Element {
  const handleFontSizeClick = useCallback(
    (size: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          try {
            $patchStyleText(selection, {
              'font-size': size,
            });
          } catch (error) {
            console.error('Error applying font size:', error);
          }
        }
      });
    },
    [editor],
  );

  return (
    <DropDownContainer>
      <DropDownButton aria-label="Font Size Dropdown">{selectedSize}</DropDownButton>
      <DropDownList>
        {FONT_SIZE_OPTIONS.map(([label, size]) => (
          <DropDownItem key={size} selected={size === selectedSize} onClick={() => handleFontSizeClick(size)}>
            {label}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
}

export default FontSizeDropDown;
