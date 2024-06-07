import React, { FC, ReactElement } from 'react';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (props) : ReactElement => {
    const { 
        onStatusChange = (e) => console.log(e),  
        onClick = (e) => console.log(e)
    } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel 
                label="In Progress" 
                control={<Switch color='warning' onChange={onStatusChange} />} 
            />
            <Button
                variant="contained" 
                color="success"
                size="small"
                sx={{
                    color: '#ffffff',
                }}
                onClick={onClick}
            >
                Market Complete
            </Button>
        </Box>
    )
}

TaskFooter.propTypes = {
    onClick: PropTypes.func,
    onStatusChange: PropTypes.func,
}