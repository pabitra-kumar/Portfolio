import React from 'react'

import { NavLink } from "react-router-dom"

export const WorkCard = (props) => {
    return (
        <div className="bg-[#1a1919] py-[1.2rem] px-[1rem]">
            <div className="h-[100%] flex flex-col">
                <img src={props.imgsrc} alt="project-preview" className="w-full" />
                <h2 className="text-[#fff] text-[1.4rem] font-semibold px-0 py-[1rem]">{props.title}</h2>
                <div className="pro-details">
                    <p className="pb-[1rem] text-[1.1rem] text-justify">{props.text}</p>
                </div>
                <div className="flex justify-between py-[0.5rem] px-0">
                    <NavLink to={props.view} target="_blank" className="btn py-[0.5rem] px-[1rem]"> View </NavLink>
                    <NavLink to={props.source} target="_blank" className="btn py-[0.5rem] px-[1rem]"> Source </NavLink>
                </div>
            </div>
        </div>
    )
}
