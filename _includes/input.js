import PropTypes from "prop-types";

const Input = ({ name, label, type = "text", onChange = () => null }) => {
  return (
    <div className="form-group flex flex-col font-regular text-lg">
      <label htmlFor={name} className="mb-2 text-blue-dark">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="mb-4 h-10 bg-white md:bg-blue-light outline-none border-b border-blue-dark"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  onChange: () => null,
};

export default Input;
