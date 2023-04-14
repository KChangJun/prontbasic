import React from 'react'

interface Props {
    title: string;
    link: string;
}

export default function NaverFind({title,link}:Props) {
    return (
        <li>
            <a target="_blank" className="find_text" href={link}>
                {title}
            </a>
        </li>
    )
}
