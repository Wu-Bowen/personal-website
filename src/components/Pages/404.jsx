import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import Hotdog from './../data/images/hotdog.gif';

const useStyles = makeStyles((theme) => ({
    notFound: {
        marginTop: '9vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '64px',
        color: theme.palette.secondary.textColor,
        fontFamily: '"IBM Plex Serif",Big Caslon,serif',
        backgroundImage: "url(" + Hotdog + "), linear-gradient(to right, rgb(146, 217, 208), rgb(146, 217, 208))",
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        backgroundPosition: '100% 0'
    },
    text: {
        maxWidth: '30vw',
        paddingLeft: '10vw',
    },
    title: {
        fontSize: 'clamp(50px,25vh,200px)',
        margin: 0,
    },
}));
const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.notFound}>
            <div className={classes.text}>
                <p className={classes.title}> 404 </p>
                <p> No es bueno </p>
                <p>
                    You came here, looking for something, and all you get is
                    this silly running hot dog. Not good. Not good, at all.
                </p>
                <p>
                    
                    <Link to="/">Back To Safety</Link>
                </p>
            </div>
        </div>
    );
};
export default NotFoundPage;
