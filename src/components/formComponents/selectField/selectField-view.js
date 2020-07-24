import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FormControl, Input, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@material-ui/core';
import useStyles from './selectField-styles';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const SelectField = (props) => {
    const classes = useStyles();
    const { id, label, variant, currentOptions, value, field, onChange } = props;
    const isMultiple = variant === 'multiple';

    const [selected, setSelected] = useState(value);

    const handleChange = event => {
        setSelected(event.target.value);
        onChange(event.target.value, field);
    };

    return (
        <div>
            <FormControl className={classes.root}>
                <InputLabel id={`${id}-label`}>
                    {label}
                </InputLabel>
                <Select
                    labelId={`${id}-checkbox-label`}
                    id={`${id}-checkbox`}
                    multiple={isMultiple}
                    value={selected}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => isMultiple ? selected.join(', ') : selected }
                    MenuProps = {MenuProps}
                >
                    {currentOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                            <Checkbox checked={selected.indexOf(option) > -1} />
                            <ListItemText primary={option} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

SelectField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    currentOptions: PropTypes.array
}

SelectField.defaultProps = {
    id: 'field',
    label: 'label',
    variant: 'single',
    field: 'select',
    value: ['1'],
    onChange: () => {},
    currentOptions: ['1', '2', '3']
}

export default SelectField;