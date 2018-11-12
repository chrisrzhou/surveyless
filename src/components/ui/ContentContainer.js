import {Flex} from 'rebass';
import {RESPONSIVE_CONTENT_WIDTH} from 'styles/constants';
import React from 'react';

function ContentContainer({
  alignItems,
  children,
  justifyContent,
  ...otherProps
}) {
  return (
    <Flex
      alignItems={alignItems}
      css={{boxSizing: 'border-box', height: '100%'}}
      flexDirection="column"
      justifyContent={justifyContent}
      mx="auto"
      p={4}
      width={RESPONSIVE_CONTENT_WIDTH}
      {...otherProps}>
      {children}
    </Flex>
  );
}

ContentContainer.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
};

export default ContentContainer;
