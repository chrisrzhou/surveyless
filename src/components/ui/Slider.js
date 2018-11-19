import 'rc-slider/assets/index.css';

import {Box} from 'rebass';
import RCSlider from 'rc-slider';
import React from 'react';
import Tooltip from 'rc-tooltip';

const Handle = RCSlider.Handle;

const handle = props => {
  const {value, dragging, index, ...restProps} = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

// TODO implement a better slider
function Slider({disabled, marks, max, min, onChange, step, value}) {
  return (
    <Box p={4}>
      <RCSlider
        disabled={disabled}
        handle={handle}
        marks={marks}
        max={max}
        min={min}
        step={step}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
}

export default Slider;
