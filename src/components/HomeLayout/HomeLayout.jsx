import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Footer from './Footer'
import Content from './Content'

export default class HomeLayout extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className='d-flex'>
                    <div className='w-25 '>
                        <Content />
                    </div>
                    <div className='w-75'>
                        <Carousel />
                    </div>


                </div>

                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}
