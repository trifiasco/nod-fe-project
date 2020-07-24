import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    formButton: {
        position: 'absolute',
        top: '30%',
        left: '40%',
    },
    formActions: {
        marginTop: '20px',
        background: 'darkGray'
    },
    formHeader: {
        background: 'darkGray',
    }
}));

export default useStyles;