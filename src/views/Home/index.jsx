import React, { Component } from 'react'
import { Grid, Typography, withStyles } from "@material-ui/core"
import { MovieFilter } from "@material-ui/icons"
import { connect } from "react-redux"
import { fetchMovieList } from '../../store/action/movie'
import MovieItem from '../../components/MovieItem'
import CarouselBanner from '../../components/Carousel'
import MovieRowSlick from '../../components/ReactSlick/MovieRowSlick'
import { styles } from './style'
import Layout from '../../HOCs/Layout'

class Home extends Component {

    render() {
        const { textTitle, icon } = this.props.classes;
        return (
            <Layout>
                <CarouselBanner />
                <Typography className={textTitle} variant="h4">
                    <MovieFilter className={icon} />
                    Đang Chiếu
                </Typography>
                <Grid container spacing={2}>
                    {
                        this.props.movieList.map((item) => {
                            if (item.dangChieu) {
                                return (
                                    <Grid key={item.maPhim} xs={12} sm={6} md={3} item>
                                        <MovieItem item={item}></MovieItem>
                                    </Grid>
                                )
                            } else return null;
                        })
                    }
                </Grid>
                <Typography className={textTitle} variant="h4">
                    <MovieFilter className={icon} />
                    Sắp Chiếu
                </Typography>
                <MovieRowSlick movieList={this.props.movieList} />
            </Layout>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchMovieList);
    };
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Home));

