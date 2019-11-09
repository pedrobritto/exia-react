import React from "react";
import style from "./style.modules.scss";

import cn from "lib/cn";
import PropTypes from "prop-types";

const Card = (props) => {
  const { shadow, padding } = props;
  const shadowClass = shadow ? style.shadow : "";

  return (
    <div className={cn(style.card, shadowClass)} style={{ padding }}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Card;
