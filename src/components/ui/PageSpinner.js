import {Box, Flex} from 'rebass';
import {Keyframes, animated} from 'react-spring';

import Heading from './Heading';
import React from 'react';
import {SURVEYLESS_BRAND_COLOR} from 'styles/constants';

//import { TimingAnimation, Easing } from '../../../src/addons'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: {radians: 0},
      to: {radians: 2 * Math.PI},
    });
  }
});

const ICON_SIZE = 30;
const loadingIcons = [0, 1, 2];

function LoadingIcons() {
  return (
    <Flex alignItems="center" my={3}>
      <Container reset native keys={loadingIcons} config={{duration: 2000}}>
        {({radians}) =>
          loadingIcons.map(i => (
            <Box key={i} mx={1} width={ICON_SIZE}>
              <animated.svg
                style={{
                  willChange: 'transform',
                  transform: radians.interpolate(
                    r =>
                      `translate3d(0, ${(ICON_SIZE / 2) *
                        Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`,
                  ),
                }}
                viewBox="0 0 400 400">
                <animated.g fill={SURVEYLESS_BRAND_COLOR}>
                  <path d="M256.337649,377 C252.779055,377 249.595461,375.445439 248.341555,373.105355 L171.540774,229.105144 C170.560305,227.264939 170.927493,225.199514 172.525149,223.579034 C174.118899,221.966795 176.739993,221 179.536868,221 L333.13843,221 C335.935305,221 338.556399,221.966795 340.150149,223.579034 C341.747805,225.199514 342.10718,227.264939 341.134524,229.105144 L264.333743,373.105355 C263.079837,375.445439 259.896243,377 256.337649,377 Z" />
                </animated.g>
              </animated.svg>
            </Box>
          ))
        }
      </Container>
    </Flex>
  );
}

function PageSpinner({title}) {
  return (
    <Flex
      alignItems="center"
      bg="rgba(255, 255, 255, 0.95)"
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}
      flexDirection="column"
      justifyContent="center">
      <Heading color={SURVEYLESS_BRAND_COLOR} level={2}>
        {title}
      </Heading>
      <LoadingIcons />
    </Flex>
  );
}

export default PageSpinner;
