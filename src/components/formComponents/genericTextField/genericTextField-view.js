import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TextField from '@material-ui/core/TextField';

const GenericTextField = (props) => {

    const { id, label, type, field, value, onChange} = props;

    const [error, setError] = useState(false);
    const [hintText, setHintText] = useState('');
    const [currentValue, setCurrentValue] = useState(value);

    const handleChange = event => {
        if(!(field === 'email' && validator.isEmail(event.target.value))){
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
    
    return (
        <div>
            <TextField
                margin="dense"
                inputProps={{"data-testid": `${label}`}}
                id={id}
                label={label}
                type={type}
                fullWidth
                value={currentValue}
                onChange={handleChange}
                helperText={hintText}
                error={error}
            />
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
}

GenericTextField.defaultProps = {
    id: 'field',
    label: 'label',
    type: 'text',
    field: 'firstName',
    value: '',
    onChange: () => {},
}

export default GenericTextField;