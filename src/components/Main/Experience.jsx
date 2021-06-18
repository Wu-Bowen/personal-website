import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import jobData from './../data/jobData';
import { KEY_CODES } from './../../utils';

// import { srConfig } from '@config';
import sr from './../../utils/sr';
import configs from './../../config'
import { useForkRef } from '@material-ui/core';

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
        },
    },
    inner: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    },
    tabButton: {
        display: 'flex',
        textDecoration: 'none',
        textDecorationSkipInk: 'auto',
        alignItems: 'center',
        width: '100%',
        height: '42px',
        padding: '0 20px 2px',
        borderLeft: '2px solid rgba(204, 214, 246, .15)',
        transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
        fontFamily: theme.fontSecondary,
        fontSize: '13px',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        '&:hover, &:focus' : {
            backgroundColor: theme.palette.secondary.mainLowest,
            outline: 'none',
        }
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
                <div role="tablist" aria-label="Job tabs" onKeyDown={(e) => { onKeyDown(e) }}>
                    {jobData?.companies && jobData.companies.map((company, i) => {
                        return <div
                            key={i}
                            className={classes.tabButton}
                            style={currentTab === i ? ({
                                color: '#77ddaa',
                                cursor: 'pointer'
                            }
                            ) : ({
                                color: '#8892b0',
                                cursor: 'pointer'
                            })}
                            onClick = {()=>{setCurrentTab(i)}}
                            ref={el => (tabs.current[i] = el)}
                            id={`tab-${i}`}
                            role="tab"
                            tabIndex={currentTab === i ? '0' : '-1'}
                            aria-selected={currentTab === i ? '0' : '1'}
                            aria-controls={`panel-${i}`}
                        >
                            <span> {company.companyName} </span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;