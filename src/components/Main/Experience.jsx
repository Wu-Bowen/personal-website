import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import { srConfig } from '@config';
import sr from './../../utils/sr';
import configs from './../../config'

const useStyles = makeStyles(theme => ({
    experienceContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0 1000px',
        // CHANGE PADDDING
    },
    h2: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        margin: '10px 0 40px',
        fontSize: 'clamp(26px,5vw,32px)',
        width: '100%',
        whiteSpace: 'nowrap',
        color: theme.palette.secondary.main,
        '&::before': {
            position: 'relative',
            top: '4px',
            content: '"02."',
            marginRight: '10px',
            color: theme.palette.primary.textColor,
            fontFamily: theme.fontSecondary,
            fontSize: 'clamp(16px,3vw,20px)',
            fontWeight: '400',
        },
        '&::after': {
            content: '""',
            display: 'block',
            position: 'relative',
            top: '4px',
            width: '300px',
            height: '1px',
            marginLeft: '25px',
            backgroundColor: theme.palette.secondary.mainLowest,
        }
    },
}));
const Experience = () => {
    const classes = useStyles();
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, configs.srConfig());
    }, []);

    const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'MaterialUI', 'Java', 'Unity'];

    return (
        <div className={classes.experienceContainer} id="experience" ref={revealContainer}>
            <h2 className={classes.h2}>
                Where I've Worked
            </h2>
            <div className={classes.inner}>
                <p> yo</p>
            </div>
        </div>
    );
};

export default Experience;