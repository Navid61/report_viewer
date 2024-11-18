import './styles.css';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { AutoLinkPlugin,LinkMatcher} from '@lexical/react/LexicalAutoLinkPlugin';
import { AutoLinkNode } from '@lexical/link';
import { LineBreakNode } from 'lexical';
import { PageBreakNode } from './nodes/PageBreakNode';







import {
  $isTextNode,
  DOMConversionMap,
  DOMExportOutput,
  Klass,
  LexicalEditor,
  LexicalNode,
  ParagraphNode,
  TextNode,
  EditorState,
  
  
} from 'lexical';

import ExampleTheme from './ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
// import TreeViewPlugin from './plugins/TreeViewPlugin';
import { parseAllowedColor, parseAllowedFontSize } from './styleConfig';
import PageBreakPlugin from './plugins/PageBreakPlugin';


const placeholder = 'Enter some rich text...';

// Define URL matchers for AutoLinkPlugin
// Define URL matchers for AutoLinkPlugin
const urlMatchers: LinkMatcher[] = [
  (text: string) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const match = urlRegex.exec(text);
    if (match) {
      return {
        index: match.index,
        length: match[0].length,
        text: match[0],
        url: match[0],
      };
    }
    return null;
  },
];


// Custom function to export editor state as JSON for storage
const handleChange = (editorState: EditorState) => {
  editorState.read(() => {
    const json = JSON.stringify(editorState);
    console.log('Editor JSON:', json);
    // You can save `json` to your backend or state as needed
  });
};

const removeStylesExportDOM = (
  editor: LexicalEditor,
  target: LexicalNode,
): DOMExportOutput => {
  const output = target.exportDOM(editor);
  if (output && output.element instanceof HTMLElement) {
    for (const el of [
      output.element,
      ...output.element.querySelectorAll('[style],[class],[dir="ltr"]'),
    ]) {
      el.removeAttribute('class');
      el.removeAttribute('style');
      if (el.getAttribute('dir') === 'ltr') {
        el.removeAttribute('dir');
      }
    }
  }
  return output;
};

const exportMap = new Map<
  Klass<LexicalNode>,
  (editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
  [ParagraphNode, removeStylesExportDOM],
  [TextNode, removeStylesExportDOM],
]);

const getExtraStyles = (element: HTMLElement): string => {
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== '' && fontSize !== '15px') {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== '' && color !== 'rgb(0, 0, 0)') {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
};

const constructImportMap = (): DOMConversionMap => {
  const importMap: DOMConversionMap = {};
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) return null;
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) return output;
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }
  return importMap;
};

const editorConfig = {
  html: {
    export: exportMap,
    import: constructImportMap(),
  },
  namespace: 'React.js Demo',
  nodes: [ParagraphNode, TextNode, AutoLinkNode,LineBreakNode,PageBreakNode], // Add AutoLinkNode here
  onError(error: Error) {
    throw error;
  },
  theme: ExampleTheme,
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin   />
        
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input"
                aria-placeholder={placeholder}
                placeholder={<div className="editor-placeholder">{placeholder}</div>}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <OnChangePlugin onChange={handleChange} />
     
          <AutoLinkPlugin matchers={urlMatchers} />
       
         <PageBreakPlugin />
       
        
         
       
          {/* <TreeViewPlugin /> */}
        </div>
      </div>
    </LexicalComposer>
  );
}
