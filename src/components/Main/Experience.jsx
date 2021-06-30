import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import jobData from './../data/jobData';
import { KEY_CODES } from './../../utils';

// import { srConfig } from '@config';
import sr from './../../utils/sr';
import configs from './../../config'

const useStyles = makeStyles(theme => ({
    experienceContainer: {
        margin: '0px auto',
        width: '80vw',
        maxWidth: '1000px',
        padding: '100px 0',
        color: theme.palette.secondary.main
    },
    tabList: {
        position: 'relative',
        zIndex: '3',
        width: 'max-content',
        padding: '0',
        margin: '0',
        lisStyle: 'none',
    },
    h2: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        margin: '10px 0 40px',
        fontSize: 'clamp(26px,5vw,32px)',
        width: '100%',
        whiteSpace: 'nowrap',
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
        },
    },
    inner: {
        display: 'flex',
    },
    tabButton: {
        border: 0,
        background: 'none',
        display: 'flex',
        textDecoration: 'none',
        textDecorationSkipInk: 'auto',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        padding: '0 20px 2px',
        borderLeft: '2px solid rgba(204, 214, 246, .15)',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.mainLowest,
            outline: 'none',
        }
    },
    activeTab: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        zIndex: '10',
        width: '2px',
        height: '50px',
        borderRadius: '4px',
        background: theme.palette.primary.textColor,
        transition: 'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
        transitionDelay: '0.1s',
    },
    tabPanels: {
        display: 'block',
        position: 'relative',
        width: '100%',
        marginLeft: '20px',
    },
    tabPanel: {
        width: '100%',
        height: 'auto',
        padding: '10px 5px',
        minHeight: '380px',
        // display: 'block',
    },
    h3: {
        marginBottom: '2px',
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '1.3',
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
    range: {
        marginBottom: '25px',
        color: theme.palette.secondary.textColor,
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
    },
    descriptionContainer: {
        padding: '0',
        margin: '0',
        listStyle: 'none',
    },
    descriptionContent: {
        paddingLeft: '20px',
        marginBottom: '18px',
        '&::before': {
            content: '"▹"',
            position: 'absolute',
            left: '0px',
            color: theme.palette.primary.textColor,
        },

    }
}));
const Experience = () => {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState(0);
    const [focusedTab, setFocusedTab] = useState(null);
    const tabs = useRef([]);
    const revealContainer = useRef(null);

    const onKeyDown = (e) => {
        switch (e.key) {
            case KEY_CODES.ARROW_UP: {
                e.preventDefault();
                setFocusedTab(focusedTab - 1);
                break;
            }
            case KEY_CODES.ARROW_DOWN: {
                e.preventDefault();
                setFocusedTab(focusedTab + 1);
                break;
            }
            case KEY_CODES.ENTER: {
                setCurrentTab(focusedTab);
                // setCurrentTab(focusedTab)
            }
            default: {
                break;
            }
        }
    };

    useEffect(() => {
        sr.reveal(revealContainer.current, configs.srConfig());
    }, []);

    useEffect(() => {
        if (tabs.current[focusedTab]) {
            tabs.current[focusedTab].focus();
            return;
        }
        if (focusedTab >= tabs.current.length) {
            setFocusedTab(0);
        }
        if (focusedTab < 0) {
            setFocusedTab(tabs.current.length - 1);
        }
    }, [focusedTab])

    return (
        <div className={classes.experienceContainer} id="experience" ref={revealContainer}>
            <h2 className={classes.h2}>
                Where I've Worked
            </h2>
            <div className={classes.inner}>
                <div className={classes.tabList} role="tablist" aria-label="Job tabs" onKeyDown={(e) => { onKeyDown(e) }}>
                    {jobData?.companies && jobData.companies.map((company, i) => {
                        return (
                            <button
                                key={i}
                                className={classes.tabButton}
                                style={currentTab === i ? ({
                                    color: '#77ddaa',
                                    cursor: 'pointer',
                                }
                                ) : ({
                                    color: '#8892b0',
                                    cursor: 'pointer',
                                })}
                                onClick={() => { setCurrentTab(i) }}
                                ref={el => (tabs.current[i] = el)}
                                id={`tab-${i}`}
                                role="tab"
                                tabIndex={currentTab === i ? '0' : '-1'}
                                aria-selected={currentTab === i ? '0' : '1'}
                                aria-controls={`panel-${i}`}
                            >
                                <span> {company.companyName} </span>
                            </button>
                        )
                    })}
                    <div className={classes.activeTab} style={{ transform: `translateY(${currentTab * 50}px)` }} />
                </div>


                <div className={classes.tabPanels}>
                    {jobData?.companies && jobData.companies.map((company, i) => {
                        return (
                            <div
                                key={i}
                                className={classes.tabPanel}
                                id={`panel-${i}`}
                                role="tabpanel"
                                tabIndex={currentTab === i ? '0' : '-1'}
                                aria-labelledby={`tab-${i}`}
                                aria-hidden={currentTab !== i}
                                hidden={currentTab !== i}
                            >
                                <h3 className={classes.h3}>
                                    <span> {company.title} </span>
                                    <span className="company">
                                        {' @ '}
                                        <a href={company.url} className={classes.anchor} rel="noopener noreferrer" target="_blank">
                                            {company.companyName}
                                        </a>
                                    </span>
                                </h3>
                                <p className="range">
                                    <span className={classes.range}>
                                        {company.range}
                                    </span>
                                </p>
                                <ul className={classes.descriptionContainer}>
                                    {company.roleDescription.map((description, j) => {
                                        return (
                                            <li key={j} className={classes.descriptionContent}>
                                                {description}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;