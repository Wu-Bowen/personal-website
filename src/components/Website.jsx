import React, { useState } from 'react';
// import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import Email from './Email';
import Social from './Social';
import Home from "./Home";
import Loader from './Loader';
import Intro from './Main/Intro';
import About from './Main/About';
import Experience from './Main/Experience';
import Work from './Main/Work';
import Projects from './Main/Projects';
import Contact from './Main/Contact';
// import Footer from "./Footer";

const useStyle = makeStyles(theme => ({
    root: {
        padding: '0px',
        margin: '0px',
        minHeight:'100%',
        width: '100%',
        lineHeight: '1.3',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,

    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
}))

const Website = () => {
    const classes = useStyle();
    const [isLoading, setIsLoading] = useState(true);
    return (

        <>
            {isLoading ? (
                <Loader finishLoading={() => setIsLoading(!isLoading)} />
            ) : (
                <div className={classes.root}>
                    <Navbar isHome={true}/>
                    <Email isHome={true} />
                    <Social isHome={true} />
                    <div className={classes.content}>
                        <Home className={classes.root}>
                            <Intro />
                            <About />
                            <Experience />
                            <Work />
                            <Projects />
                            <Contact />
                        </Home>
                    </div>
                </div>
            )}
        </>
    )
}
export default Website;