import React from 'react';
import PropTypes from 'prop-types';
import MuiPhoneNumber from 'material-ui-phone-number';

const PhoneNumberField = (props) => {

    const { id, label } = props;
    const handleOnChange = val => {
        console.log(val);
    }

    return (
        <div>
            <MuiPhoneNumber id={id} defaultCountry={'us'} onChange={handleOnChange} />
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