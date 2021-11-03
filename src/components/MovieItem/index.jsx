import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, withStyles, Box } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import { styles } from "./style"
import { Rating } from "@material-ui/lab"
import { PlayCircleOutline } from "@material-ui/icons"

class MovieItem extends Component {
    render() {
        const { tenPhim, hinhAnh, maPhim, danhGia } = this.props.item;
        const { card, cardActions, cardActionArea, cardActionAreaHover } = this.props.classes;
        return (
            <div>
                <Card className={card}>
                    <CardActionArea className={cardActionArea}>
                        <CardMedia
                            className="cardMedia"
                            style={{ height: 400, width: 400 }}
                            image={hinhAnh}
                        />
                        <CardContent className="cardContent">
                            <Typography className="text" gutterBottom variant="h5" component="h2" noWrap="true" align="center">
                                {tenPhim}
                            </Typography>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="customized-10" defaultValue={danhGia} max={10} readOnly />
                            </Box>
                        </CardContent>
                        <div className={cardActionAreaHover}>
                            <PlayCircleOutline className="icon"></PlayCircleOutline>
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
            </div>
        )
    }
}

export default withStyles(styles)(MovieItem);