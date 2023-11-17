//rcc
import React, { Component } from 'react'
//import css dạng module
import style from './StyleComponent.module.scss'
export default class StyleComponent extends Component {
    render() {
        let fz = '20px';
        let classNameCss = 'text-green';
        let obStyle = {
            fontSide: '20px',
            color: 'white',
            backgroundColor: 'red',
            padding: '15px'
        }
        return (
            <div className='container'>
                <p className={`bg-danger ${style[classNameCss]}`}>Lorem ipsum dolor sit amet.</p>

                <div style={{
                    fontSide: '20px',
                    color: 'white',
                    backgroundColor: 'red',
                    padding: '15px'
                }}>
                    abc


                </div>
                <div style={obStyle}>
                    abc
                </div>
            </div>
        )
    }
}
