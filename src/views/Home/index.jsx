import React, { Component } from 'react'
import Header from '../../components/Header'
import { Container, Grid, Typography, withStyles } from "@material-ui/core"
import { MovieFilter } from "@material-ui/icons"
import { connect } from "react-redux"
import { fetchMovieList } from '../../store/action/movie'
import MovieItem from '../../components/MovieItem'
import CarouselBanner from '../../components/Carousel'
import MovieRowSlick from '../../components/ReactSlick/MovieRowSlick'
import { styles } from './style'
import Footer from '../../components/Footer'
// import VerticalTab from '../../components/VerticalTab'

class Home extends Component {

    tokenCyberSoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDc3MzQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0Nzg4MjAwMH0.adTs_7mDpRC34Pwdsgpu-EUnD_gW9Z8REnUnl05QysA"

    render() {
        const { textTitle, icon } = this.props.classes;
        return (
            <div>
                <Container maxWidth="lg">
                    <Header />
                    <CarouselBanner />
                    <Typography className={textTitle} variant="h4">
                        <MovieFilter className={icon} />
                        Đang Chiếu
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            this.props.movieList.map((item) => {
                                if(item.dangChieu) {
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
                    <MovieRowSlick movieList={this.props.movieList}/>
                    <Footer></Footer>

                    {/* <VerticalTab></VerticalTab> */}
                </Container>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchMovieList);
        localStorage.setItem("tokenCyberSoft", this.tokenCyberSoft);
    };
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Home));

