import React, { useState } from 'react';
import PropTypes from 'prop-types';
import configs from '../config';
import Side from './Side';
import Icon from './Icons/Icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    socialContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        '&::after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: '80px',
            margin: '0 auto',
            backgroundColor: theme.palette.secondary.main,
        },
    },
    list: {
        width: '20px',
        paddingLeft: '10px',
        marginBottom: '10px',
        '& svg': {
            color: theme.palette.secondary.main,
        },
        '&:last-of-type': {
            marginBottom: '40px',
        },
        '&:hover, &:focus': {
            transform: 'translateY(-3px)',
            '& svg': {
                color: theme.palette.primary.textColor,
            }
        },
    },
}));

const Social = ({ isHome }) => {
    const classes = useStyles();
    return (
        <Side isHome={isHome} orientation="left">
            <div className={classes.socialContainer}>
                {configs.socialMedia &&
                    configs.socialMedia.map(({ url, name }, i) => (
                        <li className={classes.list} key={i}>
                            <a
                                className={classes.svg}
                                href={url}
                                aria-label={name}
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
            </div>
        </Side>
    )
};

Social.propTypes = {
    isHome: PropTypes.bool,
};

export default Social;