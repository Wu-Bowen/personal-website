import Pdf from './../files/resume.pdf';
import React from 'react';

const Resume = () => {
    return (
        <div className="App">
            <a href={Pdf} target="_blank" rel="noreferrer">
                Download Pdf
            </a>
        </div>
    );
};

export default Resume;
