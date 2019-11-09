import React from "react";
import style from "./style.module.scss";

import cn from "lib/cn";

const FormLabel = ({ className, htmlFor, children, label, required, ...props }) => {
  return (
    <label {...props} className={cn(style.label, className)} htmlFor={htmlFor}>
      {label || children}
      {required && <span className="colorSecondary fwBr"> *</span>}
    </label>
  );
};

export default FormLabel;
