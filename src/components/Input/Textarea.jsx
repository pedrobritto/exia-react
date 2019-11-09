import React from "react";
import style from "./style.module.scss";

const FormTextarea = ({
  placeholder,
  id,
  name,
  value,
  defaultValue,
  disabled,
  readOnly,
  onChange,
  onBlur,
  rows = 5,
  cols,
  ...props
}) => {
  return (
    <textarea
      {...props}
      id={id}
      className={style.formControl}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      cols={cols}
    />
  );
};

export default FormTextarea;
