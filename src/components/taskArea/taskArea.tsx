import React, { FC, ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { Task } from '../task/task';

export const TaskArea: FC = () : ReactElement => {
    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>
                    Status Of Your Tasks As on {' '} 
                    { format(new Date(), "PPPP") }
                </h2>
            </Box>
            <Grid 
                container
                display="flex"
                justifyContent="center"    
            >
                <Grid 
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <Box>
                        <TaskCounter status={Status.todo} />
                    </Box>
                    <Box>
                        <TaskCounter status={Status.inProgress} />
                    </Box>
                    <Box>
                        <TaskCounter status={Status.completed} />
                    </Box>
                </Grid>
                <Grid 
                    item
                    display="flex"
                    flexDirection="column"
                    xs={10}
                    md={8}
                >
                    <Task />
                    <Task />
                    <Task />
                </Grid>
            </Grid>
        </Grid>
    )
}