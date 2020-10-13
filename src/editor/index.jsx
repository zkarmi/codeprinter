import React from 'react';
import { Container } from 'reactstrap';
import Toolbar from './toolbar';
import { Document, themes } from './document';
import { useState } from 'react';

const Editor = () => {
  const fonts = [
    'Anonymous Pro',
    'Cousine',
    'Cutive Mono',
    'Fira Mono',
    'IBM Plex Mono',
    'Inconsolata',
    'Nanum Gothic Coding',
    'Nova Mono',
    'Overpass Mono',
    'Oxygen Mono',
    'PT Mono',
    'Roboto Mono',
    'Share Tech Mono',
    'Source Code Pro',
    'Space Mono',
    'Ubuntu Mono'
  ];

  const sizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const editorThemes = ['None', ...themes];

  const [editorStyle, setEditorStyle] = useState({
    font: fonts[11],
    size: sizes[2],
    theme: editorThemes[0],
    lineNumbers: 'none'
  });

  const onPrint = () => {
    window.print();
  };

  const onChange = toolbar => {
    const style = {
      font: toolbar.activeFont,
      size: toolbar.activeSize,
      theme: toolbar.activeTheme,
      lineNumbers: toolbar.lineNumbers
    };
    setEditorStyle(style);
  };

  return (
    <div className="responsive-container">
      <Toolbar
        fonts={fonts}
        activeFont={editorStyle.font}
        sizes={sizes}
        activeSize={editorStyle.size}
        themes={editorThemes}
        activeTheme={editorStyle.theme}
        lineNumbers={editorStyle.lineNumbers}
        onChange={onChange}
        onPrint={onPrint}
      />
      <Container fluid={true} className="h-100">
        <Document
          font={editorStyle.font}
          size={editorStyle.size}
          theme={editorStyle.theme}
          lineNumbers={editorStyle.lineNumbers}
        />
      </Container>
    </div>
  );
};

Editor.propTypes = {};

export default Editor;
