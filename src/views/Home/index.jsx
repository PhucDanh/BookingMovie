import React, { Component } from 'react'
import { Box, Grid, Typography, withStyles } from "@material-ui/core"
import { MovieFilter } from "@material-ui/icons"
import { connect } from "react-redux"
import { fetchMovieList } from '../../store/action/movie'
import MovieItem from '../../components/MovieItem'
import CarouselBanner from '../../components/Carousel'
import MovieRowSlick from '../../components/ReactSlick/MovieRowSlick'
import { styles } from './style'
import Layout from '../../HOCs/Layout'
import Search from '../../components/Search'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            toggleRender: false
        }
    }

    checkSearching = (arrSearch) => {
        console.log("togggle", this.state.toggleRender);
        console.log("home check search", this.state.searching);
        if (arrSearch.length === 0) {
            console.log("arr length = 0");
            this.setState({
                searching: false,
                toggleRender: !this.state.toggleRender
            })
        } else {
            this.setState({
                searching: true,
                toggleRender: !this.state.toggleRender
            })
        }
    }

    render() {
        const { textTitle, icon } = this.props.classes;
        return (
            <Layout>
                <CarouselBanner />

                <Search movieList={this.props.movieList} checkSearching={this.checkSearching}></Search>
                {
                    (this.state.searching) ? (
                        () => null
                    ) : (
                        <Box>
                            <Box style={{ margin: "10px 20px" }}>
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
                            </Box>
                            <Box style={{ margin: "10px 20px" }}>
                                <Typography className={textTitle} variant="h4">
                                    <MovieFilter className={icon} />
                                    Sắp Chiếu
                                </Typography>
                                <MovieRowSlick movieList={this.props.movieList} />
                            </Box>
                        </Box>
                    )
                }
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

