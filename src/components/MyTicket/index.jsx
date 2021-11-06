import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styles } from "./style"

class MyTicket extends Component {
    render() {
        const { hoTen, email, thongTinTungVe } = this.props;
        return (
            <Card style={{ maxWidth: 350, minWidth: 350 }}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt="Phuc Danh"
                            src="https://picsum.photos/200"
                            style={{ width: "40px", height: "40px" }}
                        />
                    }
                    title={hoTen}
                    subheader={email}
                />
                <CardMedia
                    component="img"
                    height="400"
                    image={thongTinTungVe.hinhAnh}
                    alt={thongTinTungVe.maVe}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Hệ thống rạp</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {thongTinTungVe.danhSachGhe[0].tenHeThongRap}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Tên rạp</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {thongTinTungVe.danhSachGhe[0].tenRap}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Tên phim</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {thongTinTungVe.tenPhim}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Thời luọng</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {thongTinTungVe.thoiLuongPhim + " min"}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Ghế</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {
                                thongTinTungVe.danhSachGhe.map((item) => {
                                    return "[" + item.tenGhe + "] ";
                                })
                            }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Giá vé</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography>: {thongTinTungVe.giaVe * thongTinTungVe.danhSachGhe.length + " VND"}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default connect()(withStyles(styles)(MyTicket))