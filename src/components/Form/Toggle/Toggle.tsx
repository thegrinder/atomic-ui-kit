import * as React from 'react';
import ToggleCheckbox from './ToggleCheckbox';
import ToggleLabel from './ToggleLabel';
import ToggleSlider from './ToggleSlider';

export interface IToggleProps {
  h?: number;
  disabled?: boolean;
  onChange: (e: any) => void;
}

const Toggle: React.SFC<IToggleProps> = ({ h, disabled, onChange, ...rest }) => (
  <ToggleLabel>
    <ToggleCheckbox
      h={h}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    <ToggleSlider h={h} disabled={disabled}/>
  </ToggleLabel>
);

const defaultProps: Partial<IToggleProps> = {
  disabled: false,
  h: 34,
};

Toggle.defaultProps = defaultProps;

export default Toggle;
