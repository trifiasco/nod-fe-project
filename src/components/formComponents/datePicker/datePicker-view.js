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
    value: PropTypes.instanceOf(Date) || PropTypes.instanceOf(null),
    field: PropTypes.string,
    onChange: PropTypes.func,
}

DatePicker.defaultProps = {
    id: 'dob',
    label: 'date of birth',
    value: '02/02/2020',
    field: 'dob',
    onChange: () => {}

}

export default DatePicker;