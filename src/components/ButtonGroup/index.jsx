import React from "react";
import style from "./style.module.scss";

import cn from "lib/cn";

const ButtonGroup = ({ children, align, maxWidth }) => {
  const alignClass = cn(
    align === "left" && style.alignLeft,
    align === "right" && style.alignRight,
    align === "center" && style.alignCenter
  );

  return (
    <div className={cn(style.buttonGroup, alignClass)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: style.groupItem,
          style: {
            maxWidth,
          },
        })
      )}
    </div>
  );
};

export default ButtonGroup;
