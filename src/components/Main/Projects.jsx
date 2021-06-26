import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import projectData from './../data/projectData';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from './../../utils/sr';
import configs from './../../config'
import { Link } from "react-router-dom";
import Icon from './../Icons/Icons';
import './../../styles/transitions.css'

const useStyles = makeStyles(theme => ({
    projectsContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0 1000px',
        display: 'flex',
        flexDirection: 'column'
    },
    h2: {
        margin: '10px auto 40px auto',
        fontSize: 'clamp(26px,5vw,32px)',
        whiteSpace: 'nowrap',
        color: theme.palette.secondary.main,
    },
    archiveLink: {
        display: 'inline-block',
        textDecoration: 'none',
        textDecorationSkipInk: 'auto',
        color: theme.palette.primary.textColor,
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        fontFamily: theme.fontSecondary,
        fontSize: '14px',
        margin: '0px auto 0px auto',
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
    projectsGrid: {
        listStyle: 'none',
        padding: '0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '15px',
        position: 'relative',
        marginTop: '50px',
        alignItems: 'center',
    },
    projectContainer: {
        position: 'relative',
        cursor: 'default',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        display: 'list-item'
    },
    project: {
        boxShadow: '0px 10px 30px -15px #37474f',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        height: '100%',
        padding: '2rem 1.75rem',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.main,
        '&:hover, &:focus': {
            boxShadow: '0 20px 30px -15px rgba(119, 221, 170, .2)',
            transform: 'translateY(-7px)'
        }
    },
    projectTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '35px'
    },
    folder: {
        color: theme.palette.primary.textColor,
        '& svg': {
            width: '40px',
            height: '40px',
        }
    },
    projectLinks: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '-10px',
        color: theme.palette.primary.textColor,
        '& a': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px 7px',
            '& svg': {
                color: theme.palette.secondary.main,
                width: '22px',
                '&:hover, &:focus': {
                    color: theme.palette.primary.textColor,
                }
            }

        }
    },
    projectTitle: {
        margin: '0px 0px 10px',
        color: theme.palette.secondary.main,
        fontSize: '22px',
        '& a': {
            display: 'inline-block',
            textDecoration: 'none',
            textDecorationSkipInk: 'auto',
            color: 'inherit',
            position: 'static',
            transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
            '&:hover, &:focus': {
                color: theme.palette.primary.textColor,
            }

        }
    },
    projectDescription: {
        color: theme.palette.secondary.mainLower,
    }
}));
const Projects = () => {
    const classes = useStyles();
    const revealTitle = useRef(null);
    const revealArchiveLink = useRef(null);
    const revealProjects = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, configs.srConfig());
        sr.reveal(revealArchiveLink.current, configs.srConfig());
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, configs.srConfig(i * 100)));
    }, []);

    const GRID_LIMIT = 6;

    return (
        <div className={classes.projectsContainer} id="projects" ref={revealTitle}>
            <h2 ref={revealTitle} className={classes.h2}>Other Noteworthy Projects</h2>
            <Link ref={revealArchiveLink} to='/archive' className={classes.archiveLink}>
                view my project timeline
            </Link>
            <ul className={classes.projectsGrid} >
                <TransitionGroup component={null}>
                    {projectData?.projects && projectData.projects.map((project, i) => {
                        return (
                            <CSSTransition
                                key={i}
                                classNames='fadeup'
                                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                                exit={false}>
                                <li className={classes.projectContainer}>
                                    <div className={classes.project}>

                                        <header style={{ width: '100%' }}>
                                            <div className={classes.projectTop}>
                                                <div className={classes.folder}>
                                                    <Icon name='Folder' />
                                                </div>
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
                                            <h3 className={classes.projectTitle}>
                                                <a href={project.external ? project.external : project.github ? project.github : '#'} target="_blank" rel="noreferrer">
                                                    {project.name}
                                                </a>
                                            </h3>
                                            <div className={classes.projectDescription}>
                                                <p> {project.description} </p>
                                            </div>
                                        </header>
                                        <footer>
                                            yoyoyoyoyoyoyoyo
                                        </footer>
                                    </div>
                                </li>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </ul>
        </div>

    );
};

export default Projects;