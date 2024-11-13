import PropTypes from "prop-types";

export default function Button({ classname, children }) {
  return (
    <button
      className={`bg-custom-blue-100 text-white text-16 py-3 lg:py-6 lg:px-12 ${classname}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
};
