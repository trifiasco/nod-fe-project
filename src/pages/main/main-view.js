import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Navbar from '../../components/navbar';
import Form from '../../components/form';
import useStyles from './main-styles';

const Main = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    }



    return (
        <div>
            <Navbar />
            <div className={classes.formButton}>
                <Button variant="outlined" size="large" color="primary" onClick={handleClickOpen}>
                    Open form
                </Button>
            </div>

            <Form {...{open, handleClickClose}}/>

            <div className={classes.descriptionArea}>
                <Button variant="outlined" size="large" color="primary">
                    <a href="https://github.com/trifiasco/nod-fe-project/" target="__blank">See code on Github</a>
                </Button>
            </div>
        </div>
    );

};

export default Main;