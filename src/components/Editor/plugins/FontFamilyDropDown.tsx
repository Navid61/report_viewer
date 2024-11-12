import React, { useCallback } from 'react';
import styled from 'styled-components';
import { LexicalEditor } from 'lexical';
import { $getSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection';

const FONT_OPTIONS: [string, string][] = [
  ['Arial', 'Arial'],
  ['Courier New', 'Courier New'],
  ['Georgia', 'Georgia'],
  ['Times New Roman', 'Times New Roman'],
  ['Trebuchet MS', 'Trebuchet MS'],
  ['Verdana', 'Verdana'],
];

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownButton = styled.button`
  padding: 8px;
  color:black;
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
   color:black;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#f1f1f1' : 'transparent')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

function FontFamilyDropDown({
  editor,
  selectedFont,
}: {
  editor: LexicalEditor;
  selectedFont: string;
}): JSX.Element {
  const handleFontClick = useCallback(
    (font: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          try {
            $patchStyleText(selection, {
              'font-family': font,
            });
          } catch (error) {
            console.error('Error applying font style:', error);
          }
        }
      });
    },
    [editor],
  );

  return (
    <DropDownContainer>
      <DropDownButton aria-label="Font Family Dropdown">{selectedFont}</DropDownButton>
      <DropDownList>
        {FONT_OPTIONS.map(([label, font]) => (
          <DropDownItem key={font} selected={font === selectedFont} onClick={() => handleFontClick(font)}>
            {label}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownContainer>
  );
}

export default FontFamilyDropDown;
