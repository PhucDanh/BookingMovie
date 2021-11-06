import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton, withStyles, MenuItem, Menu } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import { Movie } from "@material-ui/icons"
import { styles } from "./style"
import { connect } from 'react-redux'
import { actionType } from '../../store/type/type'
import { createAction } from '../../store/action/action'
import { fetchMe } from '../../store/action/auth'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: undefined
        }
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleLogOut = () => {
        localStorage.removeItem("tokenSignIn");
        this.props.dispatch(createAction(
            actionType.SET_ME,
            {}
        ))
    };
    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };

    render() {
        const { tittle, navLink, activeNavLink } = this.props.classes;
        const open = Boolean(this.state.anchorEl);
        return (
            <AppBar position="static">
                <Toolbar>
                    <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/">
                        <IconButton color="inherit" aria-label="Menu">
                            <Movie></Movie>
                        </IconButton>
                    </NavLink>
                    <Typography className={tittle} variant="h6" color="inherit">
                        Booking Movie
                    </Typography>
                    {
                        // localStorage.getItem("tokenSignIn") ? (
                        this.props.accountInfor ? (
                            <Fragment>
                                <Button
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={this.handleClick}
                                    style={{ fontSize: "30px" }}
                                >
                                    <AccountCircle style={{ fontSize: "50px", margin: "0px" }} />
                                    <Typography style={{ fontWeight: "bold" }} className={`${navLink} ${activeNavLink}`}>
                                        {this.props.accountInfor.hoTen}
                                    </Typography>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={this.state.anchorEl}
                                    open={open}
                                    onClose={this.handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={this.handleMyProfile}>
                                        <NavLink style={{ textDecoration: "none" }} exact to="/myAccount">My Profile</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleLogOut}>
                                        <NavLink style={{ textDecoration: "none" }} exact to="/signin">Logout</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <NavLink style={{ textDecoration: "none" }} exact to="/">Close</NavLink>
                                    </MenuItem>
                                </Menu>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signin">Đăng nhập</NavLink>
                                <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signup">Đăng kí</NavLink>
                            </Fragment>
                        )
                    }
                </Toolbar>
            </AppBar>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchMe);
    }
}

const mapStateToProps = (state) => ({ accountInfor: state.myAccount.accountInfor })

export default connect(mapStateToProps)(withStyles(styles)(Header));