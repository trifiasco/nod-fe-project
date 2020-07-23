import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const GenericTextField = (props) => {

    const {id, label, type} = props;

    return (
        <div>
            <TextField
                margin="dense"
                id={id}
                label={label}
                type={type}
                fullWidth
            />
        </div>
    );
};

GenericTextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
}

GenericTextField.defaultProps = {
    id: 'field',
    label: 'label',
    type: 'text'
}

export default GenericTextField;