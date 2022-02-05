import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Grid, Button, useMediaQuery } from '@mui/material/';
import Menu from './Menu';
import makeStyles from '@mui/styles/makeStyles';
import { NavHashLink as Link } from 'react-router-hash-link';
import Pdf from './../files/resume.pdf';
import { loaderDelay } from '../utils/index';
import IconLoader from './Icons/IconLoader';
import useScrollDirection from './../hooks/useScrollDirection';
import { useLocation } from 'react-router-dom';
import configs from './../config';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './../styles/transitions.css';

const useStyles = makeStyles((theme) => ({
    appBarHide: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background,
        zIndex: theme.zIndex.drawer + 1,
        transform: 'translateY(-64px)',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    },
    appBarShow: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background,
        zIndex: theme.zIndex.drawer + 1,
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    },
    toolbarDiv: {
        flexGrow: 1,
        marginRight: theme.spacing(3),
        zIndex: 1400,
    },
    toolbar: {
        // flexGrow: 1,
        '& a': {
            margin: theme.spacing(1, 1.5),
            textDecoration: 'none',
            fontStyle: 'normal',
            lineHeight: '16px',
            alignItems: 'center',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
    },
    link: {
        padding: '10px',
        display: 'inline-block',
        border: '1px solid transparent',
        '&:hover': {
            color: theme.palette.primary.textColor,
        },
    },
    navButton: {
        display: 'inline-block',
        color: theme.palette.primary.textColor,
        border: '1px solid #77ddaa',
        borderRadius: '2px',
        textDecoration: 'none',
        fontStyle: 'normal',
        lineHeight: '16px',
        alignItems: 'center',
        textAlign: 'center',
        margin: theme.spacing(1, 1.5),
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.textColorLowest,
        },
    },
    hamIcon: {
        color: theme.palette.primary.textColor,
    },
    highlight: {
        color: '#77ddaa',
        margin: '0px',
    },
    logo: {
        position: 'absolute',
        width: '48px',
        height: '48px',
        bottom: '15px',
    },
}));

const Navbar = ({ isHome }) => {
    const matches = useMediaQuery('(min-width:768px)');
    const classes = useStyles();
    const activeStyle = {
        color: '#77ddaa',
        border: '1px dashed #77ddaa',
    };
    const location = useLocation();
    const [color, setColor] = useState('none');
    const [isMounted, setIsMounted] = useState(!isHome);
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.hash) {
            if (
                configs.navLinks
                    .map((navLink) => {
                        return navLink.url.substring(1);
                    })
                    .includes(location.hash)
            ) {
                document
                    .getElementById(location.hash.substring(1))
                    .scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.hash = '';
            }
        }
    }, [isMounted]);

    const handleLogo = () => {
        window.location = window.location.href.split('#')[0];
    };
    return (
        <AppBar
            position="fixed"
            className={
                scrollDirection === 'down'
                    ? classes.appBarHide
                    : classes.appBarShow
            }
        >
            <Toolbar>
                <div className={classes.toolbarDiv}>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition
                                classNames={isHome ? 'fadedown' : ''}
                                timeout={isHome ? loaderDelay : 0}
                            >
                                <div
                                    className={classes.logo}
                                    to="/"
                                    aria-label="home"
                                    onMouseEnter={() =>
                                        setColor('rgba(119, 221, 170, .1)')
                                    }
                                    onMouseLeave={() => setColor('none')}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleLogo()}
                                >
                                    <IconLoader color={color} width="10px" />
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        {matches ? (
                            <Grid item>
                                <nav className={classes.toolbar}>
                                    <TransitionGroup component={null}>
                                        {isMounted &&
                                            configs.navLinks &&
                                            configs.navLinks.map(
                                                ({ url, name }, i) => (
                                                    <CSSTransition
                                                        key={i}
                                                        classNames={
                                                            isHome
                                                                ? 'fadedown'
                                                                : ''
                                                        }
                                                        timeout={
                                                            isHome
                                                                ? loaderDelay
                                                                : 0
                                                        }
                                                    >
                                                        <Link
                                                            smooth
                                                            to={url}
                                                            activeStyle={
                                                                activeStyle
                                                            }
                                                            className={
                                                                classes.link
                                                            }
                                                            style={{
                                                                transitionDelay: `${
                                                                    isHome
                                                                        ? i *
                                                                          100
                                                                        : 0
                                                                }ms`,
                                                            }}
                                                        >
                                                            <span
                                                                className={
                                                                    classes.highlight
                                                                }
                                                            >
                                                                {' '}
                                                                0{i + 1}.{' '}
                                                            </span>{' '}
                                                            {name}
                                                        </Link>
                                                    </CSSTransition>
                                                )
                                            )}
                                    </TransitionGroup>
                                    <TransitionGroup component={null}>
                                        {isMounted && (
                                            <CSSTransition
                                                classNames={
                                                    isHome ? 'fadedown' : ''
                                                }
                                                timeout={
                                                    isHome ? loaderDelay : 0
                                                }
                                            >
                                                <a
                                                    href={Pdf}
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    style={{
                                                        transitionDelay: `${
                                                            isHome
                                                                ? configs
                                                                      .navLinks
                                                                      .length *
                                                                  100
                                                                : 0
                                                        }ms`,
                                                    }}
                                                >
                                                    <Button
                                                        className={
                                                            classes.navButton
                                                        }
                                                    >
                                                        Resume
                                                    </Button>
                                                </a>
                                            </CSSTransition>
                                        )}
                                    </TransitionGroup>
                                </nav>
                            </Grid>
                        ) : (
                            <Menu />
                        )}
                    </Grid>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
