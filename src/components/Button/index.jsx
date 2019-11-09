import React from "react";

import cn from "lib/cn";
import style from "./style.module.scss";

// -----------------------------------------------------------------------------

const Button = ({
  as: Element = "button",
  block = false,
  children,
  className,
  color,
  outline = false,
  fontSize = "",
  padding = "",
  inline,
  size,
  ...props
}) => {
  const colorClass = style[color] || style.tertiary;
  const blockClass = block && style.block;
  const paddingClass = padding && style[padding];
  const outlineClass = outline && style.outline;
  const inlineClass = inline && style.inline;

  const sizeClass = cn(
    size === "small" && style.sizeSmall,
    size === "big" && style.sizeBig,
    size === "tiny" && style.sizeTiny
  );

  return (
    <Element
      {...props}
      className={cn(
        style.button,
        className,
        inlineClass,
        blockClass,
        colorClass,
        paddingClass,
        outlineClass,
        sizeClass
      )}
      style={{
        ...props.style,
        padding,
        fontSize,
      }}
    >
      {children}
    </Element>
  );
};

export default Button;
