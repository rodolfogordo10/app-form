import { FunctionComponent } from 'react';
import LinearProgress from 'components/LinearProgress';

interface LoadingProps {
  isActive: boolean;
}

const Loading: FunctionComponent<LoadingProps> = ({ isActive }) => {
  if (isActive) {
    return <LinearProgress />;
  }
};

export default Loading;
