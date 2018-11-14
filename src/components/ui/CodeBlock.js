import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vs} from 'react-syntax-highlighter/dist/styles/prism';

export default function({value, language}) {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={language !== 'bash'}
      style={vs}>
      {value}
    </SyntaxHighlighter>
  );
}
