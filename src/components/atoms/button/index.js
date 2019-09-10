import React from 'react';
import PropTypes from 'prop-types';

import { MainButton } from './styles';

export const Button = ({
  children,
  size,
  theme,
  type,
  disabled,
  onClick,
  className,
}) => (
  <MainButton
    size={size}
    theme={theme}
    className={className}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </MainButton>
);

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
