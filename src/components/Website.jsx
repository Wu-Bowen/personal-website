import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Navbar from './Navbar';
import Email from './Email';
import Social from './Social';
import Home from './Home';
import Loader from './Loader';
import Footer from './Footer';
import NotFoundPage from './Pages/404';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: '0px',
        margin: '0px',
        minHeight: '100%',
        width: '100%',
        lineHeight: '1.3',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    toolbar: {
        ...theme.mixins.toolbar,
    },
}));

const Website = () => {
    const classes = useStyle();
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading ? (
                <Loader finishLoading={() => setIsLoading(!isLoading)} />
            ) : (
                <div className={classes.root}>
                    <Navbar isHome={true} />
                    <Email isHome={true} />
                    <Social isHome={true} />
                    <div className={'content'}>
                        <BrowserRouter basename={'/'}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="*" component={NotFoundPage} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
export default Website;
