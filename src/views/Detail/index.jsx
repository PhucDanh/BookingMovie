import React, { Component } from 'react'
import { fetchMovieCinema, fetchMovieDetail } from '../../store/action/movie';
import { connect } from "react-redux"
import { Box, CardActionArea, CardMedia, Grid, Typography, withStyles, Button, CardContent } from '@material-ui/core';
import { styles } from "./style"
import { Description } from "@material-ui/icons"
import VerticalTabs from '../../components/VerticalTabs';
import Layout from '../../HOCs/Layout';
import Player from '../../components/ReactPlayer';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState(({
            open: !this.state.open
        }));
    };
    onCloseModal = () => {
        this.setState(({
            open: false
        }));
    };

    render() {
        const { hinhAnh, maPhim, moTa, tenPhim, trailer } = this.props.movieDetail;
        const { detail, detailContent, boxButton } = this.props.classes;
        return (
            <Layout>
                <Box className={detail}>
                    <Grid container spacing={12}>
                        <Grid item xs={12} md={6} >
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
                                <Button onClick={this.onOpenModal} className="button" size="small" color="primary">
                                    Xem Trailer
                                </Button>
                                <Player open={this.state.open} toggleModal={this.onCloseModal} url={trailer} />
                            </Box>
                        </Grid>
                    </Grid>
                    <VerticalTabs movieCinemaList={this.props.movieCinemaList}
                        movieDetail={this.props.movieDetail}></VerticalTabs>
                </Box>
            </Layout>
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