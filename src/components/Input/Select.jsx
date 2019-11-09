import React from "react";
import style from "./style.module.scss";

import cn from "lib/cn";

const FormSelect = ({
  placeholder,
  id,
  name,
  value,
  defaultValue,
  disabled,
  readOnly,
  onChange,
  onBlur,
  children,
  ...props
}) => {
  const sizeMap = {
    small: style.small,
    big: style.big,
  };

  return (
    <select
      {...props}
      id={id}
      className={cn(style.formControl, sizeMap[props.size])}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
    >
      {children}
    </select>
  );
};

export default FormSelect;
