import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

export const TaskTitleField: FC<ITextField> = (props) : ReactElement => {
    //Destructure props
    const { 
        onChange = (e) => console.log(e), 
        disabled = false 
    } = props;

    return (
        <TextField
            id="title"
            label="Task Title"
            placeholder="Task title"
            variant="outlined"
            size="small"
            name="title"
            fullWidth
            onChange={onChange}
            disabled={disabled}
        />
    )
}