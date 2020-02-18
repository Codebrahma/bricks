import styled from "@emotion/styled";
import css from "@styled-system/css";
import {
  space,
  color,
  typography,
  border,
  borderColor,
  borderRadius,
  layout
} from "styled-system";
import PTypes from "prop-types";
import propTypes from "@styled-system/prop-types";

export const OutlinedButton = styled.button(
  css({
    appearance: "none",
    fontFamily: "body",
    fontSize: "desktop.1",
    border: "3px solid",
    borderColor: "black.1",
    color: "black.1",
    bg: "tint",
    p: "5px 40px"
  }),
  color,
  space,
  typography,
  border,
  borderColor,
  borderRadius,
  layout
);

OutlinedButton.propTypes = {
  ...propTypes.border,
  ...propTypes.borderColor,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.borderRadius,
  ...propTypes.layout
};

export const InputButton = styled("input")(
  css({
    appearance: "none",
    fontFamily: "body",
    fontSize: "desktop.1",
    border: "2px solid",
    borderColor: "black.1",
    color: "tint",
    bg: "black.1",
    p: "5px"
  }),
  color,
  space,
  typography,
  border,
  borderColor,
  borderRadius,
  layout
);
InputButton.defaultProps = { type: "submit" };
InputButton.propTypes = {
  type: PTypes.string
};

InputButton.propTypes = {
  ...propTypes.border,
  ...propTypes.borderColor,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.borderRadius,
  ...propTypes.layout
};

export const EmptyButton = styled.button`
  background: none;
  border: none;
`;
