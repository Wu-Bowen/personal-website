import NLP_PAPER from './Twitter_Sentiment_Analysis.pdf';
import CO2_PAPER from './CO2.pdf';
const projectData = {
    projects: [{
        name: 'Website V3',
        description: <p>You're already here! This is the third iteration of my personal website. Credits for design go to Brittany Chiang. Click <a onClick={(e) => e.stopPropagation()} href='https://github.com/bchiang7/v4' rel="noopener noreferrer" target="_blank" aria-label="GithubLink"> here</a> to visit her GitHub</p>,
        stack: ['JavaScript', 'React', 'CSS', 'MaterialUI'],
        external: '',
        github: 'https://github.com/Wu-Bowen/personal-website',
    },
    {
        name: 'Sentiment Analysis on Twitter Data',
        description: <p>The focus of this paper is to compare various NLP models to see which best executes Twitter sentiment analysis. Algorithms explored are: Naive Bayes, Vectorizing, Support Vector Machine, and Long Short-term Memory</p>,
        stack: ['TensorFlow', 'Java', 'Python', 'LaTeX'],
        external: NLP_PAPER,
        github: '',
    },
    {
        name: 'Carbon Dioxide and Global Warming',
        description: <p>Analyzed the effects of global carbon dioxide emissions and the effects of it on global temperature using big data tools. Created visualizations using Tableau to better represent our findings.</p>,
        stack: ['Hadoop', 'MapReduce', 'Hive', 'Tableau'],
        external: CO2_PAPER,
        github: 'https://github.com/Wu-Bowen/CO2_And_Global_Warming',
    },
    {
        name: 'Website V2',
        description: <p> Second iteration of my personal website. </p>,
        stack: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        external: '',
        github: 'https://github.com/Wu-Bowen/oldWeb',
    },
    {
        name: 'Jean Baudrillard Page',
        description: <p>Created a simple Website for an English Project on Jean Baudrillard. Note: For a voice over, click on the Titles.</p>,
        stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Audacity'],
        external: 'https://wu-bowen.github.io/Jean_Project/',
        github: 'https://github.com/Wu-Bowen/Jean_Project',
    },
    {
        name: 'Bobcat Transit',
        description: <p> A multimodal transit app to optimize transportation decisions in NYC by fetching data from Google Maps, CitiBike, TripToCarbon API, and NYU’s Bus app PassioGo. </p>,
        stack: ['Expo', 'ReactNative', 'React', 'Redux', 'JavaScript', 'VSCode Live'],
        external: '',
        github: 'https://github.com/Wu-Bowen/bobcat-transit',
    },
    {
        name: 'CSS Animation Project',
        description: <p>Early project where I was just getting started in Frontend development. The project focuses on CSS animations and some cool weather effects that can be done with them.</p>,
        stack: ['HTML', 'CSS', 'JavaScript'],
        external: 'https://wu-bowen.github.io/CSS_Animations/',
        github: 'https://github.com/Wu-Bowen/CSS_Animations',
    },
    ]
};

export default projectData;