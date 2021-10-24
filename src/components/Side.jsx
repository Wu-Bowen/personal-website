import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loaderDelay } from '../utils/index';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    leftOrientation: {
        width: '40px',
        position: 'fixed',
        bottom: '0',
        left: '15px',
        right: 'auto',
        zIndex: '10',
        ['@media (max-width:768px)']: {
            display: 'none',
        }
    },
    rightOrientation: {
        width: '40px',
        position: 'fixed',
        bottom: '0',
        left: 'auto',
        right: '0px',
        zIndex: '10',
        ['@media (max-width:768px)']: {
            display: 'none',
        }
    },
}));
const Side = ({ children, isHome, orientation }) => {
    const classes = useStyles();
    const [isMounted, setIsMounted] = useState(!isHome);

    useEffect(() => {
        if (!isHome) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className={orientation === 'left' ? classes.leftOrientation : classes.rightOrientation}>
            <Slide in={isMounted} timeout={1000} direction={'up'}>
                {children}
            </Slide>
        </div>
    );
};

Side.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string.isRequired,
    isHome: PropTypes.bool,
};

export default Side;