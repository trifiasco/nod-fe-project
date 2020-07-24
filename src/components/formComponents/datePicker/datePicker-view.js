import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormControl } from '@material-ui/core';

const DatePicker = (props) => {

    const {id, label, value, field, onChange} = props;

    return (
        <div>
            <FormControl fullWidth>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        format="MM/dd/yyyy"
                        margin="normal"
                        id={id}
                        inputProps={{ "data-testid": `${label}` }}
                        label={label}
                        value={value}
                        onChange={(date) => onChange(date.toISOString(), field)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date'
                        }}
                        fullWidth
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            </FormControl>
            
        </div>
    );
};

DatePicker.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType(PropTypes.instanceOf(Date), PropTypes.instanceOf(null), PropTypes.string),
    field: PropTypes.string,
    onChange: PropTypes.func,
}

DatePicker.defaultProps = {
    id: 'dob',
    label: 'date of birth',
    value: new Date(),
    field: 'dob',
    onChange: () => {}

}

export default DatePicker;