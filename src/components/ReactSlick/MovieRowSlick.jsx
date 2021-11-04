import React, { Component } from 'react'
import { Container, Grid } from '@material-ui/core';
import Slider from 'react-slick';
// import styleSlick from "./RowSlick.css"
import MovieItem2 from '../MovieItem2';

export default class MovieRowSlick extends Component {

    // SampleNextArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={`${className} ${styleSlick['slick-next']}`}
    //             style={{ ...style }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    // SamplePrevArrow = (props) => {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={`${className} ${styleSlick['slick-prev']}`}
    //             style={{ ...style, left:"-35px" }}
    //             onClick={onClick}
    //         />
    //     );
    // }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            // variableWidth: true,
            // nextArrow: <this.SampleNextArrow />,
            // prevArrow: <this.SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container>
                <div style={{ width: "100%" }}>
                    <Slider {...settings}>
                        {
                            this.props.movieList.map((item) => {
                                if (item.sapChieu) {
                                    return (
                                        <Grid key={item.maPhim} style={{ marginRight: "60px" }}>
                                            <MovieItem2 item={item}></MovieItem2>
                                        </Grid>
                                    )
                                } else return null;
                            })
                        }
                    </Slider>
                </div>
            </Container>
        );
    }
}
