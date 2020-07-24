import React from 'react';
import Button from '@material-ui/core/Button';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions } from '@material-ui/core';
import useStyles from './form-styles';

import GenericTextField from '../formComponents/genericTextField';
import DatePicker from '../formComponents/datePicker';
import PhoneNumberField from '../formComponents/phoneNumberField';
import SelectField from '../formComponents/selectField';
import ProgressBar from '../formComponents/progressBar';

const Form = (props) => {
    const {onSubmit, onChange, currentFields, genders, recommendations, progress, descriptions} = props;

    const classes = useStyles();

    const {open, handleClickClose} = props;

    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle className={classes.formHeader} id="form-dialog-title">NOD Form</DialogTitle>
                <DialogContent>
                    <form>
                        <ProgressBar value={progress} />
                        <GenericTextField
                            id="first-name"
                            label="First Name"
                            type="text"
                            field='firstName'
                            value={currentFields.firstName}
                            {...{onChange, descriptions}}
                        />

                        <GenericTextField
                            id="last-name"
                            label="Last Name"
                            type="text"
                            field='lastName'
                            value={currentFields.lastName}
                            {...{ onChange, descriptions }}
                        />

                        <DatePicker
                            id="dob"
                            label="Date of Birth"
                            field="dob"
                            value={currentFields.dob}
                            {...{ onChange, descriptions }}
                        />

                        <GenericTextField
                            id="email"
                            label="Email"
                            type="email"
                            field='email'
                            value={currentFields.email}
                            {...{ onChange, descriptions }}
                        />

                        <GenericTextField
                            id="address"
                            label="Address"
                            type="text"
                            field='address'
                            value={currentFields.address}
                            {...{ onChange, descriptions }}
                        />

                        <PhoneNumberField
                            id="phone"
                            label="Phone Number"
                            field='phone'
                            value={currentFields.phone}
                            {...{ onChange, descriptions }}
                        />

                        <SelectField
                         id="gender"
                         label="Gender"
                         field="gender"
                         variant="single"
                         currentOptions={genders}
                         value={currentFields.gender}
                            {...{ onChange, descriptions }}
                        />

                        <SelectField
                            id="recommendation"
                            label="Areas of Recommendation"
                            field="recommendation"
                            variant="multiple"
                            currentOptions={recommendations}
                            value={currentFields.recommendation}
                            {...{ onChange, descriptions }}
                        />


                    </form>
                </DialogContent>
                <DialogActions className={classes.formActions}>
                    <Button onClick={handleClickClose} color="secondary">
                        Cancel
                    </Button>
                    <Button disabled={progress !== 100} onClick={onSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default Form;