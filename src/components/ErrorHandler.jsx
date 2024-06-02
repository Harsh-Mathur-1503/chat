import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export const ErrorHandler = (props) => {
    return props.error ? (
        <Typography color="error" variant="caption">
            {props.error}
        </Typography>
    ) : null;
};

ErrorHandler.propTypes = {
    error: PropTypes.string, // Add this line
};
