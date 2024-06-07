import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { IDateField } from './interfaces/IDateField';

import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (props) : ReactElement => {

    const { disabled = false, 
            value = new Date(), 
            onChange = (date) => console.log(date) } = props;

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker
                    disabled={disabled}
                    label="Task Date"
                    format="dd/MM/yyyy"
                    value={value}
                    onChange={onChange}
                />
            </LocalizationProvider>
        </>
    )
}

TaskDateField.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
}