import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const GenericTextField = (props) => {

    const { id, label, type, field, value, onChange} = props;

    const handleChange = event => {
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
                value={value}
                onChange={handleChange}
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