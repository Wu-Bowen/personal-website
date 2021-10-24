import React from 'react';

const IconLoader = ({ color }) => (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="120 0 400 400">
        <title>Loader Logo</title>
        <g>
            <g id='E'>
                <text transform="translate(293 324)" fill="#63ffda" fontSize="200" fontFamily='-apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif' fontWeight="600">
                    <tspan x="20" y="0">E</tspan>
                </text>
            </g>
            <path d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z" transform="translate(-67 -450)" fill={color} stroke="#63ffda" strokeWidth="10" />
        </g>
    </svg>
);

export default IconLoader;