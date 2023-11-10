import React, { Component } from 'react'

export default class
    extends Component {
    state = {
        color: 'red'
    }
    render() {
        return (
            <div className='container'>
                <i className='fa fa-home display-1' style={{ color: this.state.color }} ></i> <br /> <br />
                <button className='btn btn-danger mx-2' onClick={() => {
                    this.setState({
                        color: 'red'
                    })
                }}>Red</button>
                <button className='btn btn-success mx-2' onClick={() => {
                    this.setState({
                        color: 'green'
                    })
                }}>Green</button>
                <button className='btn btn-primary mx-2' onClick={() => {
                    this.setState({
                        color: 'blue'
                    })
                }}>Blue</button>


            </div>
        )
    }
}
