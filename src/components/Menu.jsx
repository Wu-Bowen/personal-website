import React, { useRef, useState, useEffect, useCallback } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Button } from '@mui/material/';
import { Helmet } from 'react-helmet';
import { NavHashLink as Link } from 'react-router-hash-link';
import configs from './../config';
import Pdf from './../files/resume.pdf';
import useOnClickOutside from './../hooks/useOnClickOutside';
import { KEY_CODES } from './../utils';

const useStyles = makeStyles((theme) => ({
    hamburgerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '10',
        marginRight: '-15px',
        padding: '15px',
        border: 0,
        backgroundColor: 'transparent',
        color: 'inherit',
        textTransform: 'none',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.15s',
        transitionProperty: 'opacity, filter',
        cursor: 'pointer',
    },
    hamburgerInner: {
        display: 'inline-block',
        position: 'relative',
        width: '30px',
        height: '24px',
    },
    hamburgerIconClose: {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '30px',
        height: '2px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.textColor,
        transitionDuration: '0.22s',
        transitionProperty: 'transform',
        transitionDelay: '.12s',
        transform: 'rotate(225deg)',
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        '&:before, &:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 'auto',
            right: '0',
            width: '30px',
            height: '2px',
            borderRadius: '4px',
            backgroundColor: theme.palette.primary.textColor,
            transitionTimingFunction: 'ease',
            transitionDuration: '.15s',
            transitionProperty: 'transform',
        },
        '&::before': {
            width: '100%',
            top: '0',
            opacity: '0',
            transition: 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s',
        },
        '&::after': {
            width: '100%',
            bottom: '0',
            transform: 'rotate(-90deg)',
            transition: 'top 0.1s ease-out,opacity 0.1s ease-out 0.12s',
        },
    },
    hamburgerIconOpen: {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '30px',
        height: '2px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.textColor,
        transitionDuration: '0.22s',
        transitionProperty: 'transform',
        transitionDelay: '0s',
        transform: 'rotate(0deg)',
        transitionTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        '&:before, &:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 'auto',
            right: '0',
            width: '30px',
            height: '2px',
            borderRadius: '4px',
            backgroundColor: theme.palette.primary.textColor,
            transitionTimingFunction: 'ease',
            transitionDuration: '.15s',
            transitionProperty: 'transform',
        },
        '&::before': {
            width: '120%',
            top: '-10px',
            opacity: '1',
            transition: 'top 0.1s ease-in 0.25s,opacity 0.1s ease-in',
        },
        '&::after': {
            width: '80%',
            bottom: '-10px',
            transform: 'rotate(0)',
            transition:
                'bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19)',
        },
    },
    sideBarClose: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        padding: '50px 10px',
        width: 'min(75vw, 400px)',
        height: '100vh',
        outline: '0',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 10px 30px -15px #37474f',
        zIndex: '9',
        transform: 'translateX(0vw)',
        visibility: 'visible',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    },
    sideBarOpen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '0',
        bottom: '0',
        right: '0',
        padding: '50px 10px',
        width: 'min(75vw, 400px)',
        height: '100vh',
        outline: '0',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 10px 30px -15px #37474f',
        zIndex: '9',
        transform: 'translateX(100vw)',
        visibility: 'hidden',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'column',
        color: theme.palette.secondary.main,
        fontFamily: '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
        textAlign: 'center',
    },
    link: {
        display: 'inline-block',
        border: '1px solid transparent',
        textDecoration: 'none',
        textDecorationSkipInk: 'auto',
        color: theme.palette.secondary.main,
        fontSize: '20px',
        margin: '0 auto 20px',
        padding: '3px 20px 20px',
        width: '80%',
        transition: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        '@media (max-width:450px)': {
            margin: '0 auto 10px',
            padding: '3px 10px 10px',
            fontSize: '16px',
        },
        '&:hover, &:focus, &:active': {
            color: theme.palette.primary.textColor,
            outline: '0',
        },
    },
    highlight: {
        color: '#77ddaa',
        margin: '0px',
    },
    resume: {
        display: 'inline-block',
        color: theme.palette.primary.textColor,
        backgroundColor: 'transparent',
        border: '1px solid',
        borderRadius: '4px',
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
        padding: '18px 50px',
        margin: '10% auto 0',
        width: 'max-content',
    },
}));
const Menu = () => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navRef = useRef(null);
    const buttonRef = useRef(null);

    let menuFocusables;
    let firstFocusableEl;
    let lastFocusableEl;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setFocusables = () => {
        menuFocusables = [
            buttonRef.current,
            ...Array.from(navRef.current.querySelectorAll('a')),
        ];
        firstFocusableEl = menuFocusables[0];
        lastFocusableEl = menuFocusables[menuFocusables.length - 1];
    };

    const handleBackwardTab = useCallback((e) => {
        if (document.activeElement === firstFocusableEl) {
            e.preventDefault();
            lastFocusableEl.focus();
        }
    }, [firstFocusableEl, lastFocusableEl]);

    const handleForwardTab = useCallback((e) => {
        if (document.activeElement === lastFocusableEl) {
            e.preventDefault();
            firstFocusableEl.focus();
        }
    }, [firstFocusableEl, lastFocusableEl]);

    const onKeyDown = useCallback(
        (e) => {
            switch (e.key) {
                case KEY_CODES.ESCAPE:
                case KEY_CODES.ESCAPE_IE11: {
                    setMenuOpen(false);
                    break;
                }

                case KEY_CODES.TAB: {
                    if (menuFocusables && menuFocusables.length === 1) {
                        e.preventDefault();
                        break;
                    }
                    if (e.shiftKey) {
                        handleBackwardTab(e);
                    } else {
                        handleForwardTab(e);
                    }
                    break;
                }

                default: {
                    break;
                }
            }
        },
        [handleBackwardTab, handleForwardTab, menuFocusables]
    );

    const onResize = (e) => {
        if (e.currentTarget.innerWidth > 768) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        window.addEventListener('resize', onResize);

        setFocusables();

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('resize', onResize);
        };
    }, [onKeyDown, setFocusables]);

    const wrapperRef = useRef();
    useOnClickOutside(wrapperRef, () => setMenuOpen(false));

    return (
        <div>
            <Helmet>
                <body className={menuOpen ? 'blur' : ''} />
            </Helmet>
            <div ref={wrapperRef}>
                <div
                    className={classes.hamburgerButton}
                    onClick={toggleMenu}
                    ref={buttonRef}
                >
                    <div className={classes.hamburgerInner}>
                        <div
                            className={
                                menuOpen
                                    ? classes.hamburgerIconClose
                                    : classes.hamburgerIconOpen
                            }
                        />
                    </div>
                </div>
                <div
                    className={
                        menuOpen ? classes.sideBarClose : classes.sideBarOpen
                    }
                >
                    <nav ref={navRef} className={classes.navigation}>
                        {configs?.navLinks &&
                            configs.navLinks.map(({ url, name }, i) => (
                                <Link
                                    key={i}
                                    smooth
                                    to={url}
                                    className={classes.link}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span className={classes.highlight}>
                                        {' '}
                                        0{i + 1}.{' '}
                                    </span>{' '}
                                    <br /> {name}
                                </Link>
                            ))}
                        <a
                            className={classes.link}
                            href={Pdf}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button className={classes.resume}>Resume</Button>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Menu;
