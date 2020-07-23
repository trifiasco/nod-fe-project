import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = (props) => {

    const {id, label, selectedDate} = props;

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id={id}
                        label={label}
                        value={selectedDate}
                        onChange={() => {}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date'
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};

DatePicker.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    selectedDate: PropTypes.string,
}

DatePicker.defaultProps = {
    id: 'dob',
    label: 'date of birth',
    selectedDate: '02/02/2020',

}

export default DatePicker;