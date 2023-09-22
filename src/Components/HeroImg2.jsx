import React, { Component } from 'react'

let bgStyle = {
    background: 'url("https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundPosition: 'center top',
}

export class HeroImg2 extends Component {
    render() {
        return (
            <>
                <div className='w-full  h-[60vh] relative'>
                    <div className="w-full h-full flex flex-col bg-black opacity-[0.7] justify-center items-center">
                        <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>{this.props.heading}</h1>
                        <p className='text-[1.4rem] text-center'>{this.props.text}</p>
                    </div>
                    <div className='bg-cover h-full w-full absolute top-0 left-0 -z-[1]' style={bgStyle}>
                    </div>
                    {/* <div className='w-full h-full absolute top-0 left-0 bg-[#000] opacity-[0.8]'></div> */}
                </div>

            </>

        )
    }

}
