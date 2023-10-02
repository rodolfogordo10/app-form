import { FC } from 'react';
import { SpaceProps } from 'styled-system';
import ReactSelect, { Props } from 'react-select';
import Box from 'components/Box';
import Typography from 'components/Typography';
import { colors } from 'theme/colors';

type SelectOption = { label: any; value: any };

// interface SelectProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
//   value?: any;
//   label?: string;
//   errorText?: any;
//   isMulti?: boolean;
//   defaultValue?: any;
//   options: SelectOption[];
// }

interface SelectProps extends Props, SpaceProps {
  value?: any;
  label?: string;
  errorText?: any;
  isMulti?: boolean;
  defaultValue?: any;
  options: SelectOption[];
}

const Select: FC<SelectProps> = ({
  options,
  isMulti = false,
  label,
  errorText,
  ...props
}) => {
  // extract spacing props
  const spacingProps = {};
  for (const key in props) {
    if (key.startsWith('m') || key.startsWith('p'))
      spacingProps[key] = props[key];
  }

  return (
    <Box {...spacingProps}>
      {label && (
        <Typography fontSize="0.875rem" mb="6px">
          {label}
        </Typography>
      )}

      <ReactSelect
        isMulti={isMulti}
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: colors.gray[100],
            primary: colors.primary.main,
            neutral20: colors.text.disabled,
          },
        })}
        {...props}
      />

      {errorText && (
        <Typography color="error.main" ml="0.25rem" mt="0.25rem" as="small">
          {errorText}
        </Typography>
      )}
    </Box>
  );
};

const customStyles = {
  input: (styles) => ({ ...styles, height: 30 }),
  option: (provided, state) => ({
    ...provided,
    color: 'inherit',
    cursor: 'pointer',
    backgroundColor: state.isFocused ? 'rgba(0,0,0, 0.015)' : 'inherit',
  }),
};

export default Select;