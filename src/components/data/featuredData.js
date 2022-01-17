import SpotilyticsImage from './images/spotilytics.PNG'
import MovieDBImage from './images/movieDB.PNG'
import ProjectNeo from './images/projectNeo.PNG'

const featuredData = {
    projects: [
        {
            name: 'Spotilytics',
            description: [
                'A web app for visualizing personalized Spotify analytics. View recently played songs, top artists, tracks, genres, and in-depth overview on your music choice. Also, discover new artists and songs based on personal preferences.',
            ],
            stack: [
                'JavaScript',
                'React',
                'Github',
                'Node',
                'MongoDB',
                'Express',
            ],
            image: SpotilyticsImage,
            external: '',
            github: 'https://github.com/Wu-Bowen/spring-2020-gifted-hammer',
        },
        {
            name: 'MovieDB',
            description: [
                'An interface for visualizing the endless list of movies. Find information about any movie including ratings, cast, and trailers.',
            ],
            stack: ['JavaScript', 'React', 'Github', 'Node', 'CSS'],
            image: MovieDBImage,
            external: 'https://wu-bowen.github.io/movieDb/',
            github: 'https://github.com/Wu-Bowen/movieDb',
        },
        {
            name: 'Project Neo',
            description: [
                'A in-progress survival base-building and management game. Users must proctor character as well as friendly NPC conditions as they deal with internal and external conflicts. Currently repo is private... until its eventual release',
            ],
            stack: ['C#', 'Unity', 'Github', 'Photoshop', 'ShaderLab'],
            image: ProjectNeo,
            external: '',
            github: 'https://github.com/Wu-Bowen/Project-Neo',
        },
    ],
}

export default featuredData
