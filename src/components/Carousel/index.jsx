import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchMovieBanner } from '../../store/action/movie'
import Carousel from 'react-material-ui-carousel'
import ItemCarousel from './ItemCarousel'

class CarouselBanner extends Component {
    render() {
        return (
            <Carousel>
                {
                    this.props.movieBanner.map((item) => {
                        return (
                            <ItemCarousel key={item.maBanner} item={item} />
                        )
                    })
                }
            </Carousel>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchMovieBanner);
    }
}

const mapStateToProps = (state) => {
    return {
        movieBanner: state.movie.movieBanner
    }
}

export default connect(mapStateToProps)(CarouselBanner)