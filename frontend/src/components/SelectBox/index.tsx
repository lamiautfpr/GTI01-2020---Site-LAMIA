import React from 'react';
import ReactDOM from 'react-dom';

import { Theme } from 'react-select';
import { transparentize } from 'polished';

import { primaryColor } from '../../styles/paletsColores';
import { Container, Label } from './style';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: SelectItem[];
  placeholder?: string;
  label: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder = 'Selecione...',
  label,
}) => {
  function customTheme(theme: Theme): Theme {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: transparentize(0.9, primaryColor),
        primary50: transparentize(0.5, primaryColor),
        primary: primaryColor,
      },
      // borderRadius: 12,
      spacing: {
        baseUnit: 4,
        controlHeight: 26,
        menuGutter: 8,
      },
    };
  }

  return (
    <>
      <Label>{label}</Label>
      <Container
        theme={customTheme}
        options={options}
        placeholder={placeholder}
        isSearchable
        defaultValue={options[0]}
      />
    </>
  );
};

export default SelectBox;
