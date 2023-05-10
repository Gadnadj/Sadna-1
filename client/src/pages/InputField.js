import React from 'react';
import PropTypes from 'prop-types';

function InputField({ id, label, type, value, setter, error }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        value={value ?? ''}
        onChange={(event) =>
          setter(
            event.target.type === 'number'
              ? Number(event.target.value)
              : event.target.value
          )
        }
      />
      {error && <span>{error}</span>}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setter: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default InputField;
