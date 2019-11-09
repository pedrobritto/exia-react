import React from "react";
import style from "./style.scss";

import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
