import React, { useEffect, useRef, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import sr from './../../utils/sr';
import configs from './../../config';
import './../../styles/transitions.css';

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        margin: '0px auto 0px',
        maxWidth: '600px',
        textAlign: 'center',
        padding: '100px 0 500px',
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.secondary.main,
    },
    h2: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        margin: '10px 0 40px',
        fontSize: 'clamp(22px,3vw,28px)',
        width: '100%',
        whiteSpace: 'nowrap',
        justifyContent: 'center',
        color: theme.palette.primary.textColor,
        fontFamily: theme.fontSecondary,
        '&::before': {
            position: 'relative',
            top: '2px',
            content: '"04."',
            marginRight: '10px',
            color: theme.palette.primary.textColor,
            fontFamily: theme.fontSecondary,
            fontSize: 'clamp(16px,3vw,20px)',
            fontWeight: '400',
        },
    },
    title: {
        fontSize: 'clamp(36px, 4vw, 50px)',
        margin: 'auto',
    },
    text: {
        color: theme.palette.secondary.mainLower,
    },
    email: {
        justifyContent: 'center',
        width: '6vw',
        display: 'inline-block',
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
        '&:hover, &:focus, &:active': {
            backgroundColor: theme.palette.primary.textColorLowest,
            outline: 'none',
        },
        margin: 'auto',
        marginTop: '40px',
    },
}));

const Contact = () => {
    const classes = useStyles();
    const revealContact = useRef(null);

    useEffect(() => {
        sr.reveal(revealContact.current, configs.srConfig());
    }, []);

    return (
        <div
            className={classes.contactContainer}
            id="contact"
            ref={revealContact}
        >
            <h2 className={classes.h2}> What's Next? </h2>
            <h2 className={classes.title}>Get In Touch</h2>
            <p className={classes.text}>
                {' '}
                Feel free to contact me, my inbox is always open. Whether you
                have a question or just want to say hi, I'll try my best to get
                back to your mail :D
            </p>
            <a className={classes.email} href={`mailto:${configs.email}`}>
                Say Hello
            </a>
        </div>
    );
};

export default Contact;
