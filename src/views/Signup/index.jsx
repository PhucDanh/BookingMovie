import React, { Component } from 'react'
import { Container, TextField, Button, withStyles } from '@material-ui/core'
import Header from '../../components/Header'
import { styles } from "./style"
import axios from 'axios';
import { Modal } from 'react-responsive-modal';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDt: "",
                email: "",
                maNhom: "GP01"
            },
            open: false,
            apiResult: ""
        };
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
        axios({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: this.state.formValue,
            headers: {
                TokenCybersoft: localStorage.getItem("tokenCyberSoft"),
            },
        }).then((res) => {
            console.log("res sign up", res);
            this.setState({
                apiResult: res.data.message + " Vui lòng chuyển sang đăng nhập",
                open: true
            });
        }).catch((err) => {
            console.log("err sign up", { ...err });
            this.setState({
                apiResult: err.response.data.content + " Đăng kí thất bại!!!",
                open: true
            });
        })
    }

    handleSetDefaultUser = () => {
        this.setState({
            formValue: {
                taiKhoan: "danhngo2302",
                matKhau: "12345678",
                hoTen: "Ngo Phuc Danh",
                soDt: "01233458829",
                email: "danhngo2302@gmail.com",
                maNhom: "GP01"
            }
        })
    }

    render() {
        const { formInput } = this.props.classes;
        return (
            <Container maxWidth="lg" style={{ padding: "0px" }}>
                <Header />
                <Container maxWidth="sm">
                    <h1>Đăng Ký</h1>
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
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                                Đăng Ký
                            </Button>
                            <Button onClick={this.handleSetDefaultUser} type="button" variant="contained" color="secondary">
                                Set Default User
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
}

export default withStyles(styles)(SignUp)