import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHidden = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: 1,
  whiteSpace: "nowrap",
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  transition: background-color 0.3s; /* Add smooth transition effect */
  border-radius: 5px; /* Add rounded corners */
  &:hover {
    background-color: #E3FDFD;
  }
  &.active {
    background-color: #EEEEE; /* Change background color for active state */
  }
`;
