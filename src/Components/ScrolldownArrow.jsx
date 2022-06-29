import React, { Component } from 'react'
import '../css/scrolldownarrow.scss';

export default class ScrolldownArrow extends Component {
    render() {
        return (
            <div style={{
                height: '100%',
                textAlign:'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div className='scroll-arrow'></div>
                <div className='scroll-arrow'></div>
                <div className='scroll-arrow'></div>
            </div >
        )
    }
}
