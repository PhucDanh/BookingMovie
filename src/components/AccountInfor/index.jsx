import React, { Component } from 'react'
import { Container, Button, TextField, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { styles } from "./style"
import { request } from '../../api/request';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

class AccountInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDt: "",
                email: "",
                maLoaiNguoiDung: "",
                maNhom: "GP01"
            },
            open: false,
            apiResult: ""
        }
    }

    onCloseModal = () => {
        this.setState({
            open: false
        })
    }

    handleChange = (event) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        // Ngăn việc load lại trang khi submit dữ liệu
        event.preventDefault();
        request({
            method: "PUT",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: this.state.formValue,
        }).then((res) => {
            console.log("res update user infor", res.data);
            this.setState({
                apiResult: res.data.message,
                open: true
            })
        }).catch((err) => {
            console.log("err update user infor", { ...err });
            this.setState({
                apiResult: err.response.data.message + " Cập nhật thất bại!!!",
                open: true
            })
        });
    }

    render() {
        const { formInput } = this.props.classes;
        return (
            <Container maxWidth="lg" style={{ padding: "0px", marginTop: "100px" }}>
                <Container maxWidth="sm">
                    <form onSubmit={this.handleSubmit}>
                        <div className={formInput} >
                            <TextField onChange={this.handleChange} name="taiKhoan" value={this.state.formValue.taiKhoan} fullWidth label="Tài khoản" variant="outlined" />
                        </div>
                        <div className={formInput} >
                            <TextField onChange={this.handleChange} name="matKhau" value={this.state.formValue.matKhau} fullWidth type="password" label="Mật khẩu" variant="outlined" />
                        </div>
                        <div className={formInput} >
                            <TextField onChange={this.handleChange} name="hoTen" value={this.state.formValue.hoTen} fullWidth label="Họ Tên" variant="outlined" />
                        </div>
                        <div className={formInput} >
                            <TextField onChange={this.handleChange} name="email" value={this.state.formValue.email} fullWidth label="Email" variant="outlined" />
                        </div>
                        <div className={formInput} >
                            <TextField onChange={this.handleChange} name="soDt" value={this.state.formValue.soDt} fullWidth label="Số ĐT" variant="outlined" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Button type="submit" variant="contained" color="primary">
                                Cập nhật
                            </Button>
                        </div>
                    </form>
                </Container>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h2>{this.state.apiResult}</h2>
                </Modal>
            </Container>
        )
    }

    componentDidMount() {
        this.setState({
            formValue: {
                taiKhoan: this.props.account.taiKhoan,
                matKhau: this.props.account.matKhau,
                hoTen: this.props.account.hoTen,
                soDt: this.props.account.soDT,
                email: this.props.account.email,
                maLoaiNguoiDung: "khachHang",
                maNhom: "GP01"
            }
        })
    }
}

export default connect()(withStyles(styles)(AccountInfor))