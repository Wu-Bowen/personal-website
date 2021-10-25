import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import configs from '../../config';
import { loaderDelay, navDelay } from '../../utils/index';
import './../../styles/transitions.css'


const useStyles = makeStyles(theme => ({
    introContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '100vh',
        margin: '0 auto',
        width: '80vw',
        maxWidth: '1000px',
    },
    h1: {
        margin: '0 0 20px 4px',
        color: theme.palette.primary.textColor,
        fontFamily: theme.fontSecondary,
        fontSize: '20px',
        fontWeight: '400',
    },
    h2: {
        margin: '0',
        fontSize: 'clamp(40px, 8vw, 60px)',
        color: theme.palette.secondary.main,
    },
    h3: {
        marginTop: '10px',
        fontSize: 'clamp(40px, 8vw, 60px)',
        color: theme.palette.secondary.textColor,
    },
    p: {
        margin: '20px 0 0',
        maxWidth: '500px',
        color: theme.palette.secondary.textColor,
    },
    anchor: {
        display: 'inline-block',
        textDecoration: 'none',
        textDecorationColor: 'transparent',
        color: theme.palette.primary.textColor,
        '&::after': {
            content: '""',
            width: '0px',
            height: '2px',
            display: 'block',
            background: theme.palette.primary.textColorLower,
            transition: '300ms',
        },
        '&:hover::after': {
            width: '100%',
        }
    },
    emailLink: {
        display: 'inline-block',
        marginTop: '20px',
        color: theme.palette.primary.textColor,
        backgroundColor: 'transparent',
        border: '1px solid',
        borderRadius: '4px',
        padding: '1.25rem 1.75rem',
        fontSize: '14px',
        fontFamily: theme.fontSecondary,
        lineHeight: 1,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        marginTop: '50px',
        '&:hover, &:focus, &:active': {
            backgroundColor: theme.palette.primary.textColorLowest,
            outline: 'none',
        },
    },
}));


const Intro = () => {
    const classes = useStyles();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const one = <h1 className={classes.h1}>Hello, My Name is </h1>;
    const two = <h2 className={classes.h2}>Eric Wu.</h2>;
    const three = <h3 className={classes.h3}>I am an app developer.</h3>;
    const four = (
        <p className={classes.p}>
            I'm a recently graduated software engineer who specializes in designing and developing web applications. Currently, I'm a developer at{' '}
            <a className={classes.anchor} href="https://about.bankofamerica.com/en" rel="noopener noreferrer" target="_blank">Bank of America </a> where I am creating a credit risk platform to track credit reports.
        </p>
    );
    const five = (
        <a href={`mailto:${configs.email}`} className={classes.emailLink}>
            Get In Touch
        </a>
    );

    const items = [one, two, three, four, five];
    return (
        <div className={classes.introContainer}>
            <TransitionGroup component={null}>
                {
                    isMounted &&
                    items.map((item, i) => (
                        <CSSTransition key={i} classNames={"fadeup"} timeout={loaderDelay}>
                            <div style={{ transitionDelay: `${i + 1}00ms` }}> {item}</div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    );
};

export default Intro;