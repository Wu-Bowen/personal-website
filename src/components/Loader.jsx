import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import IconLoader from './Icons/IconLoader';
import { blueGrey } from '@mui/material/colors';

const StyledLoader = styled.div`
    ${({ theme }) => theme};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    text-content: center;
    display: table;
    background-color: ${blueGrey[900]};
    .logo-wrapper {
        max-width: 200px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        opacity: ${(props) => (props.isMounted ? 1 : 0)};
        svg {
            text-align: center;
            width: 15%;
            height: 100%;
            fill: none;
            user-select: none;
            #E {
                opacity: 0;
            }
        }
    }
`;

const Loader = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: '#logo path',
                delay: 300,
                duration: 1500,
                easing: 'easeInOutQuart',
                strokeDashoffset: [anime.setDashoffset, 0],
            })
            .add({
                targets: '#logo #E',
                duration: 700,
                easing: 'easeInOutQuart',
                opacity: 1,
            })
            .add({
                targets: '#logo',
                delay: 500,
                duration: 300,
                easing: 'easeInOutQuart',
                opacity: 0,
                scale: 0.1,
            })
            .add({
                targets: '.loader',
                duration: 200,
                easing: 'easeInOutQuart',
            });
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <Helmet bodyAttributes={{ class: `hidden` }} />

            <div className="logo-wrapper">
                <IconLoader />
            </div>
        </StyledLoader>
    );
};

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;
