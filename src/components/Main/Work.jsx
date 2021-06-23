import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import featuredData from './../data/featuredData';

import sr from './../../utils/sr';
import configs from './../../config'

const useStyles = makeStyles(theme => ({
    projectContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0 1000px',
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
            content: '"03."',
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
    projects: {
        listStyle: 'none',
        padding: '0px',
        margin: '0px',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px',
    },
    listItem: {
        position: 'relative',
        diaply: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(12, 1fr)',
        alignItems: 'center',
        '&:not(:last-of-type)': {
            marginBottom: '100px',
        },
    },
    projectContentEven: {
        position: 'relative',
        gridColumn: '1 / 7',
        gridRow: '1 / -1'
    },
    projectContentOdd: {
        position: 'relative',
        gridColumn: '7 / -1',
        gridRow: '1 / -1',
        textAlign: 'right',
    },
    featuredProject: {
        margin: '10px 0px',
        color: theme.palette.primary.textColor,
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
        fontWeight: '400px',
    },
    projectTitle: {
        color: theme.palette.secondary.main,
        fontSize: 'clamp(24px, 5vw, 28px)'
        
    },
    // titleAnchor: {
    //     position: 'static',
    //     '&::before': {
    //         content: '""',
    //         display: 'block',
    //         position: 'absolute',
    //         zIndex: '0px',
    //         width: '100%',
    //         height: '100%',
    //         top: '0px',
    //         left: '0px',
    //     }
    // }
    projectDescription: {
        boxShadow: '0 10px 30px -15px #006064',
        position: 'relative',
        zIndex: '2',
        padding: '25px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.mainLower,
        fontSize: '18px',

    },
}));
const Work = () => {
    const classes = useStyles();
    const revealTitle = useRef(null);
    const revealProjects = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, configs.srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, configs.srConfig(i * 100)));
    }, []);


    return (
        <div className={classes.projectContainer} id="projects" ref={revealTitle}>
            <h2 className={classes.h2}>Some Things I've Built</h2>
            <ul className={classes.projects}>

                {featuredData?.projects && featuredData.projects.map((project, i) => {
                    return (
                        <li className={classes.listItem}>
                            <div key={i} className={classes.project} ref={el => (revealProjects.current[i] = el)}>
                                <div className={i % 2 == 1 ? classes.projectContentEven : classes.projectContentOdd}>
                                    <div>
                                        <p className={classes.featuredProject}> Featured Project </p>
                                        <h3 className={classes.projectTitle}>
                                            <a className={classes.titleAnchor}>{project.name}</a>
                                        </h3>
                                        <div className={classes.projectDescription}>
                                            <p style={{margin: '0px'}}>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
};

export default Work;