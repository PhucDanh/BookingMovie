import React, { Component } from 'react'
import { fetchMovieCinema, fetchMovieDetail } from '../../store/action/movie';
import { connect } from "react-redux"
import { Box, CardActionArea, CardMedia, Container, Grid, Typography, withStyles, Button, CardContent } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from "./style"
import { Description } from "@material-ui/icons"
import VerticalTabs from '../../components/VerticalTabs';

class Detail extends Component {
    render() {
        const { hinhAnh, maPhim, moTa, tenPhim } = this.props.movieDetail;
        const { detail, detailContent, boxButton } = this.props.classes;
        return (
            <Container>
                <Header />

                <Box className={detail}>
                    <Grid container spacing={12}>
                        <Grid item xs={6} md={6} >
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: 700, width: 500, margin: "auto" }}
                                    image={hinhAnh}
                                    alt={maPhim}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid className={detailContent} item xs={12} md={6}>
                            <CardContent>
                                <Typography className="name">
                                    {tenPhim}
                                </Typography>
                                <Typography className="description">
                                    <Description />
                                    {moTa}
                                </Typography>
                            </CardContent>
                            <Box className={boxButton}>
                                <Button className="button" size="small" color="primary">
                                    Trailer
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <VerticalTabs movieCinemaList={this.props.movieCinemaList}
                    movieDetail={this.props.movieDetail}></VerticalTabs>

                <Footer />
            </Container>
        )
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.dispatch(fetchMovieDetail(movieId));
        this.props.dispatch(fetchMovieCinema);
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetail: state.movie.movieDetail,
        movieCinemaList: state.movie.movieCinemaList,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Detail))