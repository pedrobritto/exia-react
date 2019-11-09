/**
 * Allows for a footer fixed at the bottom of the page
 */

import React from "react";
import style from "./style.module.scss";

const Main = ({ children }) => <div className={style.Main}>{children}</div>;
const Footer = ({ children }) => <div className={style.Footer}>{children}</div>;
const Content = ({ children }) => <div className={style.Content}>{children}</div>;

export { Main, Footer, Content };
