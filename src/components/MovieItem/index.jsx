import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, withStyles, Box } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import { styles } from "./style"
import { Rating } from "@material-ui/lab"
import { PlayCircleOutline } from "@material-ui/icons"
import Player from '../ReactPlayer'

class MovieItem extends Component {
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
        const { tenPhim, hinhAnh, maPhim, danhGia, trailer } = this.props.item;
        const { card, cardActions, cardActionArea, cardActionAreaHover } = this.props.classes;
        return (
            <Card className={card} style={{ maxWidth: 350 }}>
                <CardActionArea className={cardActionArea}>
                    <CardMedia
                        className="cardMedia"
                        style={{ height: 400}}
                        image={hinhAnh}
                    />
                    <CardContent className="cardContent">
                        <Typography className="text" gutterBottom variant="h5" component="h2" noWrap="true" align="center">
                            {tenPhim}
                        </Typography>
                        <Box style={{margin:"0px", padding:"0px"}} component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="customized-10" defaultValue={danhGia} max={10} readOnly />
                        </Box>
                    </CardContent>
                    <div className={cardActionAreaHover}>
                        <Button onClick={this.onOpenModal}>
                            <PlayCircleOutline className="icon"></PlayCircleOutline>
                        </Button>
                        <Player open={this.state.open} toggleModal={this.onCloseModal} url={trailer} />
                    </div>
                </CardActionArea>
                <CardActions className={cardActions}>
                    <NavLink className="link" to={`/detail/${maPhim}`}>
                        <Button className="button" size="small" color="primary">
                            Mua Vé
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(MovieItem);