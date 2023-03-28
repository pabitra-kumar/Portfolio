import React, { Component } from 'react'

import "./HeroImg2Styles.css"

export class HeroImg2 extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }

}
