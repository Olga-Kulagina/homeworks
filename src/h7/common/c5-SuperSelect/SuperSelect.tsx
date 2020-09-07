import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import {MenuItem, Select} from '@material-ui/core';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options.map((option, index) => <MenuItem value={option} key={index}>{option}</MenuItem>) // map options with key

    const onChangeCallback = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        onChangeOption(e.target.value)
    }

    return (
        <Select value={restProps.value} onChange={onChangeCallback}>
            {mappedOptions}
        </Select>
    );
}

export default SuperSelect;
