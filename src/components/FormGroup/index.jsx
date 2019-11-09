import React from "react";
import style from "./style.module.scss";

import cn from "lib/cn";

const FormGroup = ({ size, children }) => {
  return <div className={cn(style.formGroup, style[size])}>{children}</div>;
};

export default FormGroup;
