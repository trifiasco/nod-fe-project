import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import useStyles from './form-styles';

const Form = (props) => {

    const classes = useStyles();

    const {open, handleClickClose} = props;

    return (
        <div>
            <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">NOD Form</DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClickClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default Form;