import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import featuredData from './../data/featuredData';
import Icon from './..//Icons/Icons';
import sr from './../../utils/sr';
import configs from './../../config'

const useStyles = makeStyles(theme => ({
    projectContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0 100px',
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
    },
    listItem: {
        position: 'relative',
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(12, 1fr)',
        alignItems: 'center',
        '&:not(:last-of-type)': {
            marginBottom: '150px',
        },
    },
    projectContentEven: {
        position: 'relative',
        gridColumn: '1 / 7',
        gridRow: '1 / -1',
        zIndex: '2',
        pointerEvents: 'none',
    },
    projectContentOdd: {
        position: 'relative',
        gridColumn: '6 / -1',
        gridRow: '1 / -1',
        textAlign: 'right',
        zIndex: '2',
        pointerEvents: 'none',
    },
    featuredProject: {
        margin: '10px 0px',
        color: theme.palette.primary.textColor,
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
        fontWeight: '400px',
    },
    projectTitle: {
        color: theme.palette.secondary.mainTint,
        fontSize: 'clamp(20px, 4vw, 26px)'
    },

    projectDescription: {
        boxShadow: '0 20px 30px -15px #37474f',
        position: 'relative',
        zIndex: '2',
        padding: '15px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.mainLower,
        fontSize: '14px',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        pointerEvents: 'auto',
        '&:hover, &:focus': {
            boxShadow: '0 20px 30px -15px rgba(119, 221, 170, .2)',
        }
    },
    techStack: {
        position: 'relative',
        zIndex: '2',
        margin: '25px 0px 10px',
        padding: '0px',
        listStyle: 'none',
        display: 'flex',
    },
    techItem: {
        '&:not(:first-child)': {
            margin: '0px 0px 5px 20px',
        },
        color: theme.palette.secondary.mainLower,
        fontSize: '13px',
        fontFamily: theme.fontSecondary,
        whiteSpace: 'nowrap',
    },
    projectLinks: {
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginTop: '10px',
        color: theme.palette.secondary.main,
        '& a': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            '& svg': {
                color: theme.palette.secondary.main,
                width: '20px',
                '&:hover, &:focus': {
                    color: theme.palette.primary.textColor,
                }
            }

        }
    },
    projectImageEven: {
        gridColumn: '6 / -1',
        gridRow: '1 / -1',
        position: 'relative',
        zIndex: '1',
        maxWidth: 'inherit',
        paddingLeft: '20px',
        '& a': {
            '& img': {
                width: '100%',
                height: '100%',
            }
        }
    },
    projectImageOdd: {
        gridColumn: '1 / 8',
        gridRow: '1 / -1',
        position: 'relative',
        zIndex: '1',
        maxWidth: 'inherit',
        '& a': {
            '& img': {
                width: '100%',
                height: '100%',
            }
        }
    },
    imageContainer: {
        '& a': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.textColor,
            verticalAlign: 'center',
            borderRadius: '6px',
            '& svg': {
                color: theme.palette.secondary.main,
                width: '20px',
            }

        }

    },
    image: {
        borderRadius: '4px',
        mixBlendMode: 'multiply',
        filter: 'grayscale(100%) contrast(1) brightness(120%)',
        '&:hover, &:focus': {
            mixBlendMode: 'normal',
            background: 'transparent',
            filter: 'none',
            transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
            color: theme.palette.primary.textColor,
        }
    }
}));
const Work = () => {
    const classes = useStyles();
    const revealTitle = useRef(null);
    const revealProjects = useRef([]);
    const revealImages = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, configs.srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, configs.srConfig(i * 100)));
        revealImages.current.forEach((ref, i) => sr.reveal(ref, configs.srConfig(i * 100)));
    }, []);


    return (
        <div className={classes.projectContainer} id="projects" ref={revealTitle}>
            <h2 className={classes.h2}>Some Things I've Built</h2>
            <ul className={classes.projects}>

                {featuredData?.projects && featuredData.projects.map((project, i) => {
                    return (
                        <li key={i} className={classes.listItem}>
                            <div key={i} className={i % 2 == 1 ? classes.projectContentEven : classes.projectContentOdd} ref={el => (revealProjects.current[i] = el)}>
                                <div>
                                    <p className={classes.featuredProject}> Featured Project </p>
                                    <h3 className={classes.projectTitle}>
                                        <a className={classes.titleAnchor}>{project.name}</a>
                                    </h3>
                                    <div className={classes.projectDescription}>
                                        <p style={{ margin: '0px' }}>
                                            {project.description}
                                        </p>
                                    </div>
                                    {project.stack.length &&
                                        <ul
                                            className={classes.techStack}
                                            style={
                                                i % 2 == 1 ?
                                                    {

                                                    } : {
                                                        justifyContent: 'flex-end'
                                                    }
                                            }

                                        >
                                            {project.stack.map((tech, j) => {
                                                return (
                                                    <li className={classes.techItem} key={j}>
                                                        {tech}
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                    }
                                    <div
                                        className={classes.projectLinks}
                                        style={i % 2 == 1 ? {
                                            marginRight: '-10px',
                                        } : {
                                            marginLeft: '-10px',
                                            justifyContent: 'flex-end',
                                        }}>
                                        {project.github.length > 0 &&
                                            <a href={project.github} rel="noopener noreferrer" target="_blank" aria-label="GithubLink">
                                                <Icon name="GitHub" />
                                            </a>
                                        }
                                        {project.external.length > 0 &&
                                            <a href={project.external} rel="noopener noreferrer" target="_blank" aria-label="ExternalLink">
                                                <Icon name="External" />
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={i % 2 == 1 ? classes.projectImageEven : classes.projectImageOdd} ref={el => (revealImages.current[i] = el)} >
                                <div className={classes.imageContainer}>
                                    <a href={project.external ? project.external : project.github ? project.github : '#'} rel="noopener noreferrer" target="_blank" aria-label="GithubLink">
                                        <img
                                            className={classes.image}
                                            src={project.image}
                                            alt="Headshot"
                                        />
                                    </a>
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