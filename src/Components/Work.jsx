import { WorkCard } from "./WorkCard"
import ProjectCardData from "./WorkCardData"

import React from 'react'

export const Work = () => {
    return (
        <div className="work-container">
            <h1 className="text-center px-0 pt-[4rem] pb-[2rem] md:text-[2.4rem] text-[2rem] font-semibold">Projects</h1>
            <div className=" max-w-[90%] m-auto grid-cols-1 md:max-w-[1140px] grid md:grid-cols-3 gap-[40px] pb-[5rem]">
                {ProjectCardData.map( (val,ind) => {
                    return (
                        <WorkCard
                         key = {ind}
                         imgsrc = {val.imgsrc}
                         title = {val.title}
                         text = {val.text}
                         view = {val.view}
                         source = {val.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}
