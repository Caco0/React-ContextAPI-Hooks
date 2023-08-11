import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onButtonClick}>
      {children}{' '}
    </button>
  ); // JSX
};
Button.propTypes = {
  children: P.string.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
