import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from './Github'
import InstagramIcon from './Instagram'
import TwitterIcon from './Twitter'
import LinkedInIcon from './Linkedin'
import BlogIcon from './Blog'

const Icon = ({ name, color}) => {
    switch (name) {
        case 'GitHub':
            return <GithubIcon color={color} />;
        case 'Instagram':
            return <InstagramIcon color={color}/>;
        case 'Linkedin':
            return <LinkedInIcon color={color}/>;
        case 'Twitter':
            return <TwitterIcon color={color}/>;
        case 'Blog':
            return <BlogIcon color={color}/>;
        default:
            return <div> yo </div>;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;