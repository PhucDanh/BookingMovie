import React, { Component, Fragment } from 'react'
import { TextField, Container, Button } from '@material-ui/core'
import Header from "../../components/Header"
import { signIn } from '../../store/action/auth';
import { connect } from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSignIn: {
                taiKhoan: "",
                matKhau: "",
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.name , event.target.value);
        this.setState({
            formSignIn: {
                ...this.state.formSignIn,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(signIn(this.state.formSignIn, () => {
            this.props.history.push("/");
        }));
    }

    handleSetDefaultUser = () => {
        this.setState({
            formSignIn: {
                taiKhoan: "danhngo2302",
                matKhau: "12345678",
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Header></Header>
                <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
                <Container maxWidth="sm">
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.formSignIn.taiKhoan}
                                name="taiKhoan"
                                fullWidth
                                label="Tài khoản"
                                variant="outlined"
                                />
                        </div>
                        <div style={{ marginBottom: 30 }}>
                            <TextField
                                onChange={this.handleChange}
                                value={this.state.formSignIn.matKhau}
                                name="matKhau"
                                fullWidth
                                label="Mật khẩu"
                                variant="outlined"
                            />
                        </div>
                        <div>
                            <Button type="submit" variant="contained" color="primary">
                                Đăng Nhập
                            </Button>
                            <Button type="button" onClick={this.handleSetDefaultUser} variant="contained" color="secondary">
                                Set Default User
                            </Button>
                        </div>
                    </form>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(SignIn)