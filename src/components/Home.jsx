import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: "100vh",
        zIndex: 1,
    },
}));

const Home = ({ children }) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default Home;