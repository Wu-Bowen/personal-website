import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from './../../files/profileImage.jpg'

// import { srConfig } from '@config';
import sr from './../../utils/sr';
import configs from './../../config'

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0',
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
            content: '"01."',
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
    h3: {
        marginTop: '10px',
        fontSize: '60px',
        color: theme.palette.secondary.textColor,
    },
    p: {
        margin: '0 0 15px',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
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
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
        padding: 0,
        margin: '20px 0 0 0',
        overflow: 'hidden',
        listStyle: 'none',
    },
    listElement: {
        position: 'relative',
        margingBottom: '10px',
        paddingLeft: '20px',
        fontFamily: theme.fontSecondary,
        color: theme.palette.secondary.textColor,
        fontSize: '13px',
        '&::before': {
            content: '"▹"',
            position: 'absolute',
            left: '0',
            color: theme.palette.primary.textColor,
            fontSize: '14px',
            lineHeight: '17px',
        }
    },
    inner: {
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '50px',
    },
    imageContainer: {
        position: 'relative',
        maxWidth: '300px',
        height: 'fit-content',
    },
    imageWrapper: {
        display: 'flex',
        position: 'relative',
        boxShadow: '0 10px 30px -15px #37474f',
        width: '100%',
        minWidth: '200px',
        borderRadius: '4px',
        backgroundColor: '#4e8871',
        '&:hover, &:focus': {
            background: 'transparent',
            outline: '0',
            '&:after': {
                top: '15px',
                left: '15px',
            },
            '& img': {
                filter: 'none',
                mixBlendMode: 'normal',
            },
        },
        '&:before, &:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '4px',
            transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        },
        '&::before': {
            top: 0,
            left: 0,
        },
        '&::after': {
            border: '2px solid #4e8871',
            top: '20px',
            left: '20px',
            zIndex: '0',
        }
    },
    image: {
        position: 'relative',
        height: '100%',
        borderRadius: '4px',
        mixBlendMode: 'multiply',
        filter: 'grayscale(100%) contrast(1)',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        zIndex: '1',
    },
}));
const About = () => {
    const classes = useStyles();
    const revealContainer = useRef(null);

    useEffect(() => {
        sr.reveal(revealContainer.current, configs.srConfig());
    }, []);

    const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'MaterialUI', 'Java', 'Unity'];

    return (
        <div className={classes.aboutContainer} id="about" ref={revealContainer}>
            <h2 className={classes.h2}>About Me</h2>

            <div className={classes.inner}>
                <div>
                    <div>
                        <p className={classes.p}>
                            Hello! I'm Eric and welcome to my website. I've always enjoyed creating things, so naturally I branched into something I had spent hours on: computers.
                            I was simply amazed by how some lines on a page could transition to an interactive, useful interface;
                            this fascination was how I ended up in CS and continued my coding journey. Now that I have graduated from New York University (December 2020), I hope to
                            follow my passions in game development and web application development.
                        </p>

                        <p className={classes.p}>
                            Fast-forward to today, and I've had the privilege of working at{' '}
                            <a className={classes.anchor} href="https://www.chinaunicom.com.hk/en/global/home.php" rel="noopener noreferrer" target="_blank">a telecom company</a> and {' '}
                            <a className={classes.anchor} href="https://www.pfizer.com/" rel="noopener noreferrer" target="_blank">a pharmaceutical giant</a>. Currently, I am a part of the Credit Risk Team at {' '}
                            <a className={classes.anchor} href="https://about.bankofamerica.com/en" rel="noopener noreferrer" target="_blank">Bank of America</a> developing internal tools to measure capital
                            risk of numerous investment companies.
                        </p>

                        <p className={classes.p}>Here are a few technologies I've been working with recently:</p>
                    </div>

                    <ul className={classes.list}>
                        {skills && skills.map((skill, i) => <li className={classes.listElement} key={i}>{skill}</li>)}
                    </ul>
                </div>

                <div className={classes.imageContainer}>
                    <div className={classes.imageWrapper}>
                        <img
                            className={classes.image}
                            src={profileImage}
                            width={'100%'}
                            alt="Headshot"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;