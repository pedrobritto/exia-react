import React from "react";

import style from "./style.module.scss";

import FormCheckbox from "../Checkbox/index";
import { randomId } from "lib/misc";

const FormCheckboxWithLabel = ({
  id = randomId(),
  name = "",
  value = "",
  checked = undefined,
  defaultChecked = undefined,
  type = "checkbox",
  label = "",
  onChange,
  fontSize,
  disabled,
  ...props
}) => {
  return (
    <div className={style.FormCheckboxWithLabel}>
      <FormCheckbox
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        type={type}
        disabled={disabled}
      />
      {(label || props.label) && (
        <label
          className={style.label}
          htmlFor={id}
          style={{
            fontSize,
            opacity: disabled ? "0.6" : "1",
          }}
        >
          {label || props.label}
        </label>
      )}
    </div>
  );
};

export default FormCheckboxWithLabel;
