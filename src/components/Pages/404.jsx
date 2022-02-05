import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    notFound: {
        marginTop: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: 'auto',
        minHeight: '64px',
    },
}));
const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            <p>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    );
};
export default NotFoundPage;
