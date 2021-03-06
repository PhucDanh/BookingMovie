import React, { Component } from 'react'
import { Box, Grid, Radio, Button, Typography, withStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { Delete, Shop } from "@material-ui/icons"
import { styles } from "./style"
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import { createAction } from '../../store/action/action'
import { actionType } from '../../store/type/type'
import { connect } from 'react-redux'
class VerticalTabItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: -1,
            alertState: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            selectedValue: event.target.value,
        })
    };

    handleDelete = () => {
        this.setState({
            selectedValue: -1,
        })
    }

    handleBooking = () => {
        if (this.state.selectedValue === -1) {
            this.setState({
                alertState: true
            })
        } else {
            const { lstLichChieuTheoPhim, tenPhim, hinhAnh } = this.props.lichPhimDaChon;
            var bookingDetail = {
                tenPhim: tenPhim,
                hinhAnh: hinhAnh,
                tenCumRap: this.props.tenCumRap,
                diaChi: this.props.diaChi,
                tenRap: lstLichChieuTheoPhim[this.state.selectedValue].tenRap,
                ngayChieuGioChieu: lstLichChieuTheoPhim[this.state.selectedValue].ngayChieuGioChieu,
                giaVe: lstLichChieuTheoPhim[this.state.selectedValue].giaVe,
            }
            this.props.dispatch(createAction(
                actionType.SET_TICKET_DETAIL,
                bookingDetail
            ))
        }
    }

    handleCloseAlert = () => {
        this.setState({
            alertState: false
        })
    }

    render() {
        const { lstLichChieuTheoPhim } = this.props.lichPhimDaChon;
        const { gridItem, boxButton } = this.props.classes;
        return (
            <Box>
                <Grid container spacing={3}>
                    {
                        lstLichChieuTheoPhim.map((item, i) => {
                            return (
                                <Grid key={item.maLichChieu} className={gridItem} xs={12} sm={6} item >
                                    <Radio
                                        className="radio"
                                        checked={this.state.selectedValue === `${i}`}
                                        onChange={this.handleChange}
                                        value={i}
                                        name="radio-buttons"
                                    />
                                    <Typography className="typo">{item.tenRap}: {moment(item.ngayChieuGioChieu).format("hh:mm A")}</Typography>
                                </Grid>

                            )
                        })
                    }
                </Grid>
                <Box className={boxButton}>
                    {
                        (this.state.selectedValue === -1) ? (
                            <Button onClick={this.handleBooking} className="buttonItem" color="secondary" variant="outlined" startIcon={<Shop />}>
                                ?????t v??
                            </Button>
                        ) : (
                            <NavLink className="link" to={`/booking/${lstLichChieuTheoPhim[this.state.selectedValue].maLichChieu}`}>
                                <Button onClick={this.handleBooking} className="buttonItem" color="secondary" variant="outlined" startIcon={<Shop />}>
                                    ?????t v??
                                </Button>
                            </NavLink>
                        )
                    }
                    <Button onClick={this.handleDelete} className="buttonItem" color="secondary" variant="outlined" startIcon={<Delete />}>
                        H???y
                    </Button>
                    <Dialog
                        open={this.state.alertState}
                        onClose={this.handleCloseAlert}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"B???n c?? b??? qu??n ??i???u g?? kh??ng?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Xin h??y ch???n m???t r???p chi???u phim b???n y??u th??ch ho???c quay l???i trang ch??? ????? ch???n m???t b??? phim kh??c. Xin c???m ??n S2 !!!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseAlert} autoFocus>
                                ????ng
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>
        )
    }
}

export default connect()(withStyles(styles)(VerticalTabItem))