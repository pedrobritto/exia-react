import React from "react";
import style from "./style.module.scss";

import cn from "lib/cn";

const FormInput = (
  {
    type = "text",
    placeholder,
    className,
    id,
    name,
    value,
    defaultValue,
    disabled,
    readOnly,
    onChange,
    onBlur,
    ...props
  },
  ref
) => {
  const sizeClass = props.size ? style[props.size] : "";

  const classNames = cn(className, style.formControl, sizeClass, style[props.className]);

  return (
    <input
      ref={ref}
      {...props}
      type={type}
      id={id}
      className={classNames}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default React.forwardRef(FormInput);
