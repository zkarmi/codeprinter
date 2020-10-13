import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  defaultStyle,
  arduinoLight,
  ascetic,
  docco,
  githubGist,
  grayscale,
  idea,
  tomorrow,
  vs,
  xcode
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css';

const themeMap = {
  Arduino: arduinoLight,
  Ascetic: ascetic,
  Docco: docco,
  GitHub: githubGist,
  Grayscale: grayscale,
  hljs: defaultStyle,
  Idea: idea,
  Tomorrow: tomorrow,
  VS: vs,
  Xcode: xcode
};

const themes = Object.keys(themeMap);

const Document = ({ font, size, theme, lineNumbers }) => {
  const defaultCode =
    '// Welcome to codeprinter!\n' +
    'const foo = () => {\n' +
    "  console.log('This is where your code will be printed out!');\n" +
    '};';

  const [code, setCode] = useState(defaultCode);

  const onChange = event => {
    // changed variable name to avoid conflicts with state name
    const newCode = event.target.value === '' ? this.defaultCode : event.target.value;
    setCode(newCode);
  };

  let placeholder = 'Paste your code in here!';

  const lineNumberStyle = lineNumbers => {
    switch (lineNumbers) {
      case 'standard':
        return { className: 'code-line' };
      case 'vertical':
        return { className: 'code-line-vertical' };
      default:
        return null;
    }
  };

  return (
    <div className="h-100 d-flex flex-column">
      <Row className="no-print flex-grow-1">
        <Col className="flex-grow-1">
          <Input
            type="textarea"
            id="typeSpace"
            placeholder={placeholder}
            onChange={onChange}
            style={{ height: '100%', resize: 'none' }}
          />
        </Col>
      </Row>

      <div id="printSpace" className="only-print" style={{ fontSize: '62.5%' }}>
        <SyntaxHighlighter
          lineProps={lineNumberStyle(lineNumbers)}
          wrapLines={true}
          style={themeMap[theme] || ''}
          codeTagProps={{
            style: {
              fontFamily: `"${font}", monospace`,
              fontSize: `${size}pt`
            }
          }}
          lineNumberStyle={{
            fontFamily: `"${font}", monospace`,
            fontSize: `${size}pt`
          }}
          customStyle={{ border: 'none' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

Document.propTypes = {
  font: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  theme: PropTypes.oneOf(['None', ...Object.keys(themeMap)]).isRequired,
  lineNumbers: PropTypes.oneOf(['none', 'standard', 'vertical']).isRequired
};

export default Document;
export { Document, themes };
