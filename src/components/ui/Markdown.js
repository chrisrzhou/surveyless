import Blockquote from './Blockquote';
import CodeBlock from './CodeBlock';
import Heading from './Heading';
import Link from './Link';
import MarkdownImage from './MarkdownImage';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Text from './Text';

function Markdown({source}) {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={source}
      renderers={{
        blockquote: Blockquote,
        code: CodeBlock,
        heading: Heading,
        image: MarkdownImage,
        inlineCode: props => <Text isMono {...props} />,
        link: Link,
      }}
    />
  );
}

export default Markdown;
