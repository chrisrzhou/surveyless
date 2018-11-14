import CodeBlock from './CodeBlock';
import Heading from './Heading';
import Link from './Link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Text from './Text';

function Markdown({markdown}) {
  return (
    <ReactMarkdown
      source={markdown}
      renderers={{
        code: CodeBlock,
        inlineCode: props => <Text isMono {...props} />,
        root: Text,
        heading: Heading,
        link: Link,
      }}
    />
  );
}

export default Markdown;
