import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton, withStyles, MenuItem, Menu } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import { Movie } from "@material-ui/icons"
import { styles } from "./style"
import { connect } from 'react-redux'
import { actionType } from '../../store/type/type'
import { createAction } from '../../store/action/action'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: undefined
        }
    }
    // open = Boolean(this.state.anchorEl);

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    };
    handleLogOut = () => {
        this.setState({
            anchorEl: null
        });
        localStorage.removeItem("tokenSignIn");
        this.props.dispatch(createAction(
            actionType.SET_ME,
            {}
        ))
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
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My Ticket</MenuItem>
                                    <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
                                </Menu>
                            </Fragment>

                            // <span className={`${navLink} ${activeNavLink}`}>Hello, {this.props.accountInfor.hoTen}</span>
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
}

const mapStateToProps = (state) => ({ accountInfor: state.myAccount.accountInfor })

export default connect(mapStateToProps)(withStyles(styles)(Header));