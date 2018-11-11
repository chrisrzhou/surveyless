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
      flexDirection="column"
      justifyContent={justifyContent}
      mx="auto"
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
