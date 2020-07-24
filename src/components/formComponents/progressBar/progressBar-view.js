import React from 'react';
import PropTypes from 'prop-types';
import {LinearProgress, Typography, Box} from '@material-ui/core';

const ProgressBar = props => {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.number
}

ProgressBar.defaultProps = {
    value:20
}

export default ProgressBar;