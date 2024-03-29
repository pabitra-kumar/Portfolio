import React from 'react'

import { Link } from "react-router-dom"

export const WorkCard = (props) => {
    return (
        <div className="bg-transparent p-[1.2rem] h-full rounded-lg border-2 border-[#fcfb00] shadow-xl shadow-[#ffffff27] w-full">
            <div className="h-full flex flex-col justify-between w-full">
                <Link className="text-[#ffffff84] text-[1.4rem] font-semibold px-0 py-[1rem]" target='
                _blank' to={props.view === '' ? props.source : props.view} >{props.title}</Link>
                <div className="pro-details">
                    <p className="pb-[1rem] text-[1.1rem] text-sm">{props.text}</p>
                </div>
                <div className="flex justify-between py-[0.5rem] px-0 w-full">
                    <Button to={props.view} content="view" />
                    <Button to={props.source} content="source" />
                </div>
            </div>
        </div>
    )
}

const Button = ({ to, content }) => {
    return (
        <Link to={to} target={to === '' ? '' : "_blank"} className={`bg-[#fcfb00] px-4 py-2 rounded-xl text-black font-bold hover:-translate-y-1 transition-all hover:bg-[#fff9] `}>
            {content}
        </Link>
    )
}
