import { FC } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { colorOptions } from 'interfaces';

interface LinearProgressProps {
  style?: object;
  value?: number;
  thickness?: number;
  color?: colorOptions;
  variant?: 'determinate' | 'indeterminate';
}

// styled component
const StyledLinearProgress = styled.div<LinearProgressProps>`
  display: flex;
  overflow: hidden;
  position: relative;
  height: ${(props) => props.thickness}px;
  background-color: ${({ theme }) => theme.colors.body.paper};
  border-radius: ${(props) => props.thickness}px;

  &:after {
    top: 0;
    bottom: 0;
    content: ' ';
    position: absolute;
    width: ${(props) => props.value}%;
    background-color: ${({ theme }) => theme.colors.body.paper};
  }

  ${color}
`;

const LinearProgress: FC<LinearProgressProps> = (props) => {
  return <StyledLinearProgress {...props} />;
};

LinearProgress.defaultProps = {
  variant: 'determinate',
  color: 'primary',
  thickness: 6,
  value: 75,
};

export default LinearProgress;
