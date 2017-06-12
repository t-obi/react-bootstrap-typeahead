'use strict';

import cx from 'classnames';
import React, {PropTypes} from 'react';

const TextInput = React.createClass({
  propTypes: {
    /**
     * Specify the size of the input.
     */
    bsSize: PropTypes.oneOf(['large', 'lg', 'small', 'sm']),
    ariaLabel: PropTypes.string,
  },

  render() {
    const {bsSize, className, hasAux, ariaLabel, ...otherProps} = this.props;

    return (
      <input
        {...otherProps}
        aria-label={ariaLabel}
        className={cx('form-control', {
          'has-aux': hasAux,
          'input-lg': bsSize === 'large' || bsSize === 'lg',
          'input-sm': bsSize === 'small' || bsSize === 'sm',
        }, className)}
        ref={input => this._input = input}
        type="text"
      />
    );
  },

  getInstance() {
    return this._input;
  },
});

export default TextInput;
