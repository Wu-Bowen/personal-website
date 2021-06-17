const configs = {
    email: 'ebw289@nyu.edu',
    secondEmail: 'ericwu692@yahoo.com',
    socialMedia: [{
            name: 'GitHub',
            url: 'https://github.com/Wu-Bowen',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/eric_wuhooo/',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/EricWu48036776',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/eric-wu-304096165/',
        },
        {
            name: 'Blog',
            url: 'https://nyu-ossd-s20.github.io/Wu-Bowen-weekly/',
        },
    ],
    navLinks: [{
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Experience',
            url: '/#experience',
        },
        {
            name: 'Work',
            url: '/#projects',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],
    srConfig: (delay = 200, viewFactor = 0.25) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};

export default configs;