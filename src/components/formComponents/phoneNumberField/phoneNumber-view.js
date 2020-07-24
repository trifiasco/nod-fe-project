import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MuiPhoneNumber from 'material-ui-phone-number';
import {isValidNumber} from 'libphonenumber-js';
import useStyles from './phoneNumber-styles';
import { FormControl } from '@material-ui/core';

const PhoneNumberField = (props) => {

    const classes = useStyles();

    const { id, label, field, value, onChange } = props;

    const [error, setError] = useState(false);
    const [hintText, setHintText] = useState('');

    const handleOnChange = val => {
        if(!isValidNumber(val)){
            setError(true);
            setHintText('Invalid Phone Number');
            return;
        }
        setError(false);
        setHintText('');
        onChange(val, field);
    }

    return (
        <div>
            <FormControl className={classes.root}>
                <MuiPhoneNumber error={error} helperText={hintText} inputProps={{ "data-testid": `${label}` }} label={label} id={id} defaultCountry={'us'} onChange={handleOnChange} />
            </FormControl>
            
        </div>
    );
};

PhoneNumberField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
}

PhoneNumberField.defaultProps = {
    id: 'field',
    label: 'label',
}

export default PhoneNumberField;