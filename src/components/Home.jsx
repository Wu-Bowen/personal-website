import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Intro from './Main/Intro';
import About from './Main/About';
import Experience from './Main/Experience';
import Work from './Main/Work';
import Projects from './Main/Projects';
import Contact from './Main/Contact';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        minHeight: '100vh',
        zIndex: 1,
    },
}));

const Home = ({ children }) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Intro />
            <About />
            <Experience />
            <Work />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
