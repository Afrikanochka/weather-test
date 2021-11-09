import errorImage from '../../images/oops.jpg';
import { ErrorViewStyled } from './ErrorViewStyled';

function ErrorView({ texterror }) {
  return (
    <ErrorViewStyled>
    <div role="alert" className="wrapper">
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={texterror} className="text">
        {texterror}
      </p>
    </div>
    </ErrorViewStyled>
  );
}

export default ErrorView;
