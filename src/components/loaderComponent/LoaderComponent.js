import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderComponentStyled } from './LoaderComponentStyled';

function LoaderComponent() {
  return (
    <LoaderComponentStyled>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
    </LoaderComponentStyled>
  );
}

export default LoaderComponent;
