import { PropTypes } from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';
const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

IconBtn.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IconBtn;
