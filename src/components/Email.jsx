import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import Side from './Side';

const useStyles = makeStyles(theme => ({
    emailContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        '&::after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: '80px',
            margin: '0 auto',
            backgroundColor: theme.palette.secondary.main,
        },
    },
    anchor: {
        margin: '40px auto',
        padding: '10px',
        letterSpacing: '0.1em',
        writingMode: 'vertical-rl',
        fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
        lineHeight: '18px',
        color: theme.palette.secondary.main,  
        textDecoration: 'none',
        '&:hover, &:focus' : {
            transform: 'translateY(-5px)',
            color: theme.palette.primary.textColor
        }
    }
}));

const Email = ({isHome}) => {
    const classes = useStyles();
    return (
        <Side isHome={isHome} orientation="right">
            <div className={classes.emailContainer}>
                <a className={classes.anchor} href={`mailto:${'ebw289@nyu.edu'}`}>{'ebw289@nyu.edu'}</a>
            </div>
        </Side>
    );
};
Email.propTypes = {
    isHome: PropTypes.bool,
};

export default Email;