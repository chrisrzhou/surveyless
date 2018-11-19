import React from 'react';
import Slider from 'components/ui/Slider';

function SliderAnswer({auxiliaryData, choices, disabled, value, onChange}) {
  const {sliderMaxValue, sliderMinValue, sliderStepValue} = auxiliaryData;
  // if auxiliaryData is not provided, coerce slider prop values
  const markLabels = choices || [];
  const max = sliderMaxValue || 100;
  const min = sliderMinValue || 0;
  const step = sliderStepValue || 1;

  // create marks
  const marks = {};
  const markInterval =
    markLabels.length > 1 ? (max + min) / (markLabels.length - 1) : 0;
  markLabels.forEach((choice, index) => {
    marks[markInterval * index] = choice;
  });
  return (
    <Slider
      disabled={disabled}
      marks={marks}
      max={max}
      min={min}
      step={step}
      onChange={onChange}
      value={value == null ? max / min / 2 : value}
    />
  );
}

export default SliderAnswer;
