import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const GenericTextField = (props) => {

    const { id, label, type, field, value, onChange, descriptions} = props;

    const hasTooltip = descriptions.hasOwnProperty(field);
    const tooltip = descriptions[field];

    const [error, setError] = useState(false);
    const [hintText, setHintText] = useState('');
    const [currentValue, setCurrentValue] = useState(value);

    const handleChange = event => {
        if((field === 'email' && !validator.isEmail(event.target.value))){
            setError(true);
            setHintText('Invalid email address');
            setCurrentValue(event.target.value);
            onChange('', field)
            return;
        }
        setError(false);
        setHintText('');
        setCurrentValue(event.target.value);
        onChange(event.target.value, field);
    };
    
    const element = (
    <TextField
        margin="dense"
        inputProps={{ "data-testid": `${label}` }}
        id={id}
        label={label}
        type={type}
        fullWidth
        value={currentValue}
        onChange={handleChange}
        helperText={hintText}
        error={error}
    />);

    return (
        <div>
            {hasTooltip ? (
                <Tooltip arrow title={descriptions[field]} aria-label={descriptions[field]}>
                    {element}
                </Tooltip>
            ) : element
            }
            
        </div>
    );
};

GenericTextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    field: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    descriptions: PropTypes.object,
}

GenericTextField.defaultProps = {
    id: 'field',
    label: 'label',
    type: 'text',
    field: 'firstName',
    value: '',
    onChange: () => {},
    descriptions: {}
}

export default GenericTextField;