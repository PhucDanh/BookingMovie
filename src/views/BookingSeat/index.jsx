import React, { Component } from 'react'
import { Box, Grid, Typography, Button, withStyles, TextField, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import Layout from '../../HOCs/Layout'
import { styles } from "./style"
import { connect } from 'react-redux';
import { fetchCinemaListSeat, postDatVe } from '../../store/action/movie';
import { NavLink } from 'react-router-dom';

class BookingSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrBooking: [],
            danhSachGheDuocChon: "",
            tongTien: 0,
            selectedSeat: false,
            filledEmail: false,
            filledPhone: false,
            filledPayment: false,
            alertState: false,
            dataPOST: {
                maLichChieu: 0,
                danhSachVe: [
                    {
                        maGhe: 0,
                        giaVe: 0
                    }
                ]
            }
        }
    }

    handleEmailChange = (event) => {
        var confirm = false;
        if (event.target.value) {
            confirm = true;
        }
        this.setState({
            filledEmail: confirm
        })
    }

    handlePhoneChange = (event) => {
        var confirm = false;
        if (event.target.value) {
            confirm = true;
        }
        this.setState({
            filledPhone: confirm
        })
    }

    handlePaymentChange = (event) => {
        var confirm = false;
        if (event.target.value) {
            confirm = true;
        }
        this.setState({
            filledPayment: confirm
        })
    }

    handlePaymentAlert = () => {
        if (this.state.filledEmail & this.state.filledPhone & this.state.filledPayment & this.state.selectedSeat) {
            console.log("dataPOST", this.state.dataPOST);
            this.props.dispatch(postDatVe(this.state.dataPOST));
        }
        this.setState({
            alertState: true
        })
    }

    handleCloseAlert = () => {
        this.setState({
            alertState: false
        })
    }

    handleSeatButton = (seatSelected) => {
        const cloneArrBooking = [...this.state.arrBooking];
        const dataPOST = {
            maLichChieu: +this.props.match.params.maLichChieu,
            danhSachVe: []
        };
        var stringSeatBooking = "";
        var totalCost = 0;
        var selected = false;
        var arrIndex = cloneArrBooking.findIndex((seatBooking) => {
            return seatBooking.maGhe === seatSelected.maGhe;
        });
        if (arrIndex === -1) {
            cloneArrBooking.push(seatSelected);
        } else {
            cloneArrBooking.splice(arrIndex, 1);
        };
        for (var element of cloneArrBooking) {
            stringSeatBooking += "Gh??? " + element.tenGhe + ", lo???i " + element.loaiGhe + ", Gi?? " + element.giaVe + " VND \n";
            totalCost += element.giaVe;
            dataPOST.danhSachVe.push({
                maGhe: element.maGhe,
                giaVe: element.giaVe
            })
        }
        if (totalCost !== 0) {
            selected = true;
        }
        this.setState({
            arrBooking: cloneArrBooking,
            danhSachGheDuocChon: stringSeatBooking,
            tongTien: totalCost + " VND",
            selectedSeat: selected,
            dataPOST: dataPOST
        })
    }

    renderButton = () => {
        var seatButtons = this.props.danhSachGhe.map((item) => {
            if (item.daDat) {
                return (
                    <Grid className="seatItem" item xs={1}>
                        <Button className="button" style={{ backgroundColor: "#E74C3C" }} disabled={true} >{item.tenGhe}</Button>
                    </Grid>
                )
            } else {
                if (this.state.arrBooking.findIndex((seatBooking) => {
                    return seatBooking.maGhe === item.maGhe;
                }) === -1) {
                    return (
                        <Grid className="seatItem" item xs={1}>
                            <Button className="button" onClick={() => { this.handleSeatButton(item) }} style={{ backgroundColor: "#7F8C8D" }} >{item.tenGhe}</Button>
                        </Grid>
                    )
                } else {
                    return (
                        <Grid className="seatItem" item xs={1}>
                            <Button className="button" onClick={() => { this.handleSeatButton(item) }} style={{ backgroundColor: "#2ECC71" }} >{item.tenGhe}</Button>
                        </Grid>
                    )
                }
            }
        });
        return seatButtons;
    }

    renderDialogContent = () => {
        if (this.state.filledEmail & this.state.filledPhone & this.state.filledPayment & this.state.selectedSeat) {
            console.log("Right all");
            return (
                <Dialog
                    open={this.state.alertState}
                    onClose={this.handleCloseAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Thanh to??n th??nh c??ng !!!
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            ????? ki???m tra v?? vui l??ng truy c???p "My Profile"
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <NavLink style={{ textDecoration: "none" }} exact to="/">
                            <Button onClick={this.handleCloseAlert} autoFocus>
                                ????ng
                            </Button>
                        </NavLink>
                    </DialogActions>
                </Dialog>
            )
        } else {
            return (
                <Dialog
                    open={this.state.alertState}
                    onClose={this.handleCloseAlert}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        B???n c?? b??? qu??n ??i???u g?? kh??ng?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Xin h??y ch???n ch??? ng???i v?? ??i???n ?????y ????? th??ng tin c?? nh??n tr?????c khi thanh to??n. Xin c???m ??n S2 !!!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseAlert} autoFocus>
                            ????ng
                        </Button>
                    </DialogActions>
                </Dialog>
            )
        }
    }

    render() {
        const { boxContainer, gridContainer, columnLeft, columnRight, listSeat, userInfor, boxPayButton } = this.props.classes;
        const { tenCumRap, tenRap, tenPhim, ngayChieu, gioChieu } = this.props.thongTinPhim;
        return (
            <Layout>
                <Box className={boxContainer} >
                    <Typography className="title">Seat Booking</Typography>
                    <Grid className={gridContainer} container>
                        <Grid item xs={12} md={8} className={columnLeft}>
                            <Typography className="screen">SCREEN</Typography>
                            <Grid container className={listSeat}>
                                {this.renderButton()}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} className={columnRight}>
                            <Box className="boxItem">
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>C???m r???p</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>: {tenCumRap}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>T??n r???p</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>: {tenRap}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>T??n phim</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>: {tenPhim}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Ng??y chi???u</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>: {ngayChieu} </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Gi??? chi???u</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>: {gioChieu}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="boxItem">
                                <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>Gh??? ???? ch???n ({this.state.arrBooking.length})</Typography>
                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Danh s??ch gh??? ???????c ch???n"
                                    defaultValue={this.state.danhSachGheDuocChon}
                                    style={{ width: "100%" }}
                                />
                                <Typography style={{ color: "#AED6F1", fontWeight: "800" }}>T???ng ti???n</Typography>
                                <TextareaAutosize
                                    maxRows={2}
                                    aria-label="empty textarea"
                                    defaultValue={this.state.tongTien}
                                    style={{ width: "100%" }}
                                />
                            </Box>
                            <Box className="boxItem">
                                <Grid className={userInfor}>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} required={true} onChange={this.handleEmailChange} />
                                </Grid>
                                <Grid className={userInfor}>
                                    <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth={true} required={true} onChange={this.handlePhoneChange} />
                                </Grid>
                                <Grid className={userInfor}>
                                    <FormControl xs={{ m: 1, minWidth: 200 }} variant="outlined" fullWidth={true} required={true} >
                                        <InputLabel id="demo-simple-select-helper-label">Payment</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={this.state.payment}
                                            label="Age"
                                            onChange={this.handlePaymentChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Momo">Momo</MenuItem>
                                            <MenuItem value="ZaloPay">ZaloPay</MenuItem>
                                            <MenuItem value="Visa">Visa</MenuItem>
                                            <MenuItem value="Bank">Bank</MenuItem>
                                            <MenuItem value="Cash">Cash</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Box>
                            <Box className="boxItem">
                                <Grid container style={{ marginBottom: "10px" }}>
                                    <Grid item xs={2}>
                                        <Typography style={{ backgroundColor: "#E74C3C", width: "35px", height: "35px" }}></Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography style={{ paddingTop: "6px" }}>Gh??? ???? ?????t</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ marginBottom: "10px" }}>
                                    <Grid item xs={2}>
                                        <Typography style={{ backgroundColor: "#2ECC71", width: "35px", height: "35px" }}></Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography style={{ paddingTop: "6px" }}>Gh??? ??ang ch???n </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ marginBottom: "10px" }}>
                                    <Grid item xs={2}>
                                        <Typography style={{ backgroundColor: "#7F8C8D", width: "35px", height: "35px" }}></Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography style={{ paddingTop: "6px" }}>Gh??? ch??a ?????t </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={boxPayButton}>
                        <Button onClick={this.handlePaymentAlert} className="button" size="small" color="primary">
                            Thanh To??n
                        </Button>
                        {
                            this.renderDialogContent()
                        }
                    </Box>
                </Box>
            </Layout>
        )
    }

    componentDidMount() {
        const maLichChieu = this.props.match.params.maLichChieu;
        this.props.dispatch(fetchCinemaListSeat(maLichChieu));
    }
}

const mapStateToProps = (state) => {
    return {
        thongTinPhim: state.movie.thongTinPhim,
        danhSachGhe: state.movie.danhSachGhe,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(BookingSeat))