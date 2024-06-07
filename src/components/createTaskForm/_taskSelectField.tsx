import React, { FC, ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';

import PropTypes from 'prop-types'

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
    const { value = '', 
            label = 'Select Box', 
            name = 'selectBox',  
            disabled = false, 
            onChange = (e: SelectChangeEvent) => console.log(e), 
            items = [{value: '', label: 'Add Items'}]
        } = props;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id={`${name}-id`}>{label}</InputLabel>
            <Select
                labelId={`${name}-id`}
                id={`${name}-id-select`}
                value={value}
                label={label}
                name={name}
                disabled={disabled}
                onChange={onChange}
            >
                { 
                    items.map((item, index) => (
                        <MenuItem key={item.value + index} value={item.value}>{item.label}</MenuItem>
                    )) 
                }
            </Select>
        </FormControl>
    )
}

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    )
}