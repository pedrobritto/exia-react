import React from "react";

import styled from "styled-components";
import { mix } from "polished";
import PropTypes from "prop-types";

const BoxContainer = styled.div`
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};

  color: ${(props) => props.color && mix(0.25, "#000", props.color)};
  color: $color-primary;
  background-color: ${(props) => props.color && mix(0.87, "#fff", props.color)};
  border: 2px solid ${(props) => props.color && mix(0.5, "#fff", props.color)};
`;

const MessageBox = (props) => {
  return <BoxContainer {...props}>{props.children}</BoxContainer>;
};

MessageBox.defaultProps = {
  color: "green",
  borderRadius: ".5rem",
  padding: "1rem 1.4rem",
  fontSize: "1.5rem",
};

MessageBox.propTypes = {
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
};

export default MessageBox;
