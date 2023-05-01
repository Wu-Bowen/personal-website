import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#37474f',
        flexDirection: 'column',
        height: 'auto',
        minHeight: '64px',
    },
    credits: {
        color: theme.palette.secondary.mainEvenLower,
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
        lineHeight: '1',
    },
    anchor: {
        display: 'inline-block',
        textDecoration: 'none',
        textDecorationColor: 'transparent',
        color: theme.palette.secondary.mainEvenLower,
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
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
        },
        '&:hover': {
            color: theme.palette.primary.textColorLower,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.credits}>
                Designed by&nbsp;
                <a
                    className={classes.anchor}
                    href="https://github.com/bchiang7"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Brittany Chiang
                </a>{' '}
                &amp; Built by&nbsp;
                <a
                    className={classes.anchor}
                    href="https://github.com/Wu-Bowen/personal-website"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Eric Wu
                </a>
            </div>
        </div>
    );
};

export default Footer;
