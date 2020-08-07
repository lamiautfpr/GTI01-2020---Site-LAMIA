import React, { useRef, useEffect, useCallback, useState } from 'react';
import { OptionTypeBase, Theme } from 'react-select';
import { Props as CreatableProps } from 'react-select/creatable';
import { useField } from '@unform/core';

import { MdInfo } from 'react-icons/md';
import makeAnimated from 'react-select/animated';
import { transparentize } from 'polished';
import { IconBaseProps } from 'react-icons';
import { Container, Content, Error } from './style';
import { primaryColor, secondaryColor } from '../../styles/paletsColorers';

interface Props extends CreatableProps<OptionTypeBase> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
const Select: React.FC<Props> = ({ icon: Icon, name, ...rest }) => {
  const selectRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const animatedComponents = makeAnimated();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  const customTheme = useCallback((theme: Theme): Theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: transparentize(0.9, primaryColor),
        primary50: transparentize(0.5, primaryColor),
        primary: primaryColor,
        neutral30: transparentize(0.3, secondaryColor),
        neutral10: transparentize(0.5, primaryColor),
      },
      // borderRadius: 12,
      spacing: {
        baseUnit: 4,
        controlHeight: 26,
        menuGutter: 8,
      },
    };
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} isErrored={!!error} className="input-form">
      {Icon && <Icon size={24} />}
      <Content
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        components={animatedComponents}
        theme={customTheme}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && (
        <Error title={error}>
          <MdInfo size={24} color="#ac3030" />
        </Error>
      )}
    </Container>
  );
};
export default Select;
