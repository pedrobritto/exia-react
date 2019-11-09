import React from "react";
import style from "./style.module.scss";

const FormErrorMessage = ({ error, touched }) => {
  return error && touched && <p className={style.errorMessage}>{error}</p>;
};

export default FormErrorMessage;
