import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from './Github'
import InstagramIcon from './Instagram'
import TwitterIcon from './Twitter'
import LinkedInIcon from './Linkedin'
import BlogIcon from './Blog'
import ExternalIcon from './External';

const Icon = ({ name, color }) => {
    switch (name) {
        case 'GitHub':
            return <GithubIcon />;
        case 'Instagram':
            return <InstagramIcon />;
        case 'Linkedin':
            return <LinkedInIcon />;
        case 'Twitter':
            return <TwitterIcon />;
        case 'Blog':
            return <BlogIcon />;
        case 'External':
            return <ExternalIcon />;
        default:
            return <div> yo </div>;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;