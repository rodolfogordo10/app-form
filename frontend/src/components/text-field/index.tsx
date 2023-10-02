import {
  cloneElement,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { SpaceProps } from 'styled-system';
import MaskedInput from 'react-text-mask';
import Box from '../Box';
import { colorOptions } from '../../interfaces';
import { SyledTextField, TextFieldWrapper } from './styles';

export interface TextFieldProps {
  labelColor?: colorOptions;
  label?: string;
  mask?: string;
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
  endAdornment?: any;
}

const typeMask = {
  cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
  phone: [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  cpf: [
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
  ],
  cnpj: [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
};

const TextField: FC<
  InputHTMLAttributes<HTMLInputElement> & TextFieldProps & SpaceProps
> = ({ id, label, mask, errorText, labelColor, endAdornment, ...props }) => {
  const [textId, setTextId] = useState(id);

  // extract spacing props
  const spacingProps = {};
  for (const key in props) {
    if (key.startsWith('m') || key.startsWith('p'))
      spacingProps[key] = props[key];
  }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  return (
    <>
      <TextFieldWrapper
        color={labelColor && `${labelColor}.main`}
        fullwidth={props.fullwidth}
        {...spacingProps}
      >
        {label && <label htmlFor={textId}>{label}</label>}
        <Box position="relative">
          {mask ? (
            <MaskedInput
              mask={typeMask[mask]}
              {...props}
              render={(ref, propsRen) => (
                <SyledTextField ref={ref} {...propsRen} />
              )}
            />
          ) : (
            <SyledTextField id={textId} {...props} />
          )}
          {endAdornment &&
            cloneElement(endAdornment, {
              className: `end-adornment ${endAdornment.className}`,
            })}
        </Box>
        {errorText && <small>{errorText}</small>}
      </TextFieldWrapper>
    </>
  );
};

TextField.defaultProps = { color: 'default' };

export default TextField;
