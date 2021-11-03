import React, { Component } from 'react'
import { Paper } from '@material-ui/core'


const carouselStyles = {
    height: "600px",
    color: "#ffffff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
}

export default class ItemCarousel extends Component {
    render() {
        const { maPhim, hinhAnh } = this.props.item;
        return (
            <div>
                <Paper style={{...carouselStyles, backgroundImage:`url(${hinhAnh})`}}>
                    <img src={hinhAnh} alt={maPhim} style={{width:"100%", opacity:0}}/>
                </Paper>
            </div>
        )
    }
}
