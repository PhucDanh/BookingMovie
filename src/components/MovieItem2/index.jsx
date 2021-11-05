import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, withStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import { styles } from "./style"
import Player from '../ReactPlayer';

class MovieItem2 extends Component {
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
        const { tenPhim, hinhAnh, maPhim, moTa, trailer } = this.props.item;
        const { card, cardActions, cardActionArea, cardActionAreaHover } = this.props.classes;
        return (
            <div>
                <Card className={card} style={{ maxWidth: 350 }}>
                    <CardActionArea className={cardActionArea}>
                        <CardMedia
                            className="cardMedia"
                            style={{ height: 400 }}
                            image={hinhAnh}
                        />
                        <CardContent className="cardContent">
                            <Typography className="text" gutterBottom variant="h5" component="h2" noWrap="true" align="center">
                                {tenPhim}
                            </Typography>
                        </CardContent>
                        <div className={cardActionAreaHover}>
                            <div className="content">
                                <h2 className="textName">{tenPhim}</h2>
                                <p className="textDetail">{moTa.substr(0, 150) + "..."}</p>
                            </div>
                        </div>
                    </CardActionArea>
                    <CardActions className={cardActions}>
                        <NavLink className="link" to={`/detail/${maPhim}`}>
                            <Button className="button" size="small" color="primary">
                                Mua Vé
                            </Button>
                        </NavLink>
                        <Button onClick={this.onOpenModal} className="button" size="small" color="primary">
                            Trailer
                        </Button>
                        <Player open={this.state.open} toggleModal={this.onCloseModal} url={trailer} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(MovieItem2);