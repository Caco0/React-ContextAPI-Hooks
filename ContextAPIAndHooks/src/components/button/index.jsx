import P from 'prop-types';

export const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children} </button>; // JSX
};
Button.propTypes = {
  children: P.string.isRequired,
  onButtonClick: P.func.isRequired,
};
