import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <div className={s.section}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
