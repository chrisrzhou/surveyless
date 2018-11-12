import {Box} from 'rebass';
import React from 'react';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  static defaultProps = {
    position: 'top',
  };

  hideTooltip() {
    this.setState({displayTooltip: false});
  }
  showTooltip() {
    this.setState({displayTooltip: true});
  }

  render() {
    let tooltip = this.props.tooltip;
    let position = this.props.position;
    return (
      <Box
        css={`
          position: relative;

          .tooltip-trigger {
            display: inline-block;
            text-decoration: underline;
          }

          .tooltip-bubble {
            min-width: 120px;
            max-width: 210px;
            position: absolute;
            z-index: 10;
            &::after {
              content: '';
              position: absolute;
            }
          }

          .tooltip-top {
            bottom: 100%;
            left: 50%;
            padding-bottom: 9px;
            transform: translateX(-50%);

            &::after {
              border-left: 9px solid transparent;
              border-right: 9px solid transparent;
              border-top: 9px solid $tooltip-color;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }

          .tooltip-bottom {
            top: 100%;
            left: 50%;
            padding-top: 9px;
            transform: translateX(-50%);

            &::after {
              border-left: 9px solid transparent;
              border-right: 9px solid transparent;
              border-bottom: 9px solid $tooltip-color;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }

          .tooltip-left {
            top: 50%;
            right: 100%;
            padding-right: 9px;
            transform: translateY(-50%);

            &::after {
              border-left: 9px solid $tooltip-color;
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
            }
          }

          .tooltip-right {
            top: 50%;
            left: 100%;
            padding-left: 9px;
            transform: translateY(-50%);

            &::after {
              border-right: 9px solid $tooltip-color;
              border-top: 9px solid transparent;
              border-bottom: 9px solid transparent;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
            }
          }

          .tooltip-message {
            background: $tooltip-color;
            border-radius: 3px;
            color: $tooltip-text-color;
            font-size: 0.75rem;
            line-height: 1.4;
            padding: 0.75em;
            text-align: center;
          }
        `}
        className="tooltip"
        onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className="tooltip-message">{tooltip}</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </Box>
    );
  }
}
