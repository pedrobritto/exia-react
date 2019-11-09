import React from "react";

import style from "./style.module.scss";
import { randomId } from "lib/misc";

const FormCheckbox = ({
  id = randomId(),
  name = "",
  value = "",
  defaultChecked = undefined,
  checked = undefined,
  type = "checkbox",
  onChange,
  disabled,
  ...props
}) => {
  return (
    <React.Fragment>
      <input
        {...props}
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        className={style.checkboxLabel}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={id} />
    </React.Fragment>
  );
};

export default FormCheckbox;
