import CodeBlock from './CodeBlock';
import Heading from './Heading';
import Link from './Link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Text from './Text';

function Markdown({html}) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={html}
      renderers={{
        link: Link,
        code: CodeBlock,
        inlineCode: props => <Text isMono {...props} />,
        root: Text,
        heading: Heading,
      }}
    />
  );
}

export default Markdown;
