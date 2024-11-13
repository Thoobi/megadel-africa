import PropTypes from "prop-types";

export default function Section({ classname, children }) {
  return (
    <section
      className={`${classname} flex items-center gap-24 w-full px-52 py-32`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  classname: PropTypes.string,
  children: PropTypes.node.isRequired,
};
