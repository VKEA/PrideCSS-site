import React, { Component } from 'react'

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {gradient: "default subtitle"};
    }

    getGradient () {
        const array = [
            "pridecss--gay",
            "pridecss--bi",
            "pridecss--ace",
            "pridecss--trans",
            "pridecss--lesbian",
            "pridecss--nb"
        ]

        const randomNumber = Math.floor(Math.random() * (array.length))

        this.setState({
            gradient: array[randomNumber]
        })
    }

    componentDidMount () {
        this.getGradient()
    }

    render () {
      return (
        <div className='headercontainer'>
            <h1 className={'title '+this.state.gradient} onClick={() => this.getGradient()}>PRIDECSS</h1>
        </div>
      )
    }
}

export default Header