import React from "react";

import classes from "./FooterWrapper.module.scss";

const FooterWrapper = props => {
    return <div className={classes.FooterWrapper}>{props.children}</div>;
};

export default FooterWrapper;
