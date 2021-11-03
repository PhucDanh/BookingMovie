import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton, withStyles } from "@material-ui/core"
import { Movie } from "@material-ui/icons"
import { styles } from "./style"
import { connect } from 'react-redux'

class Header extends Component {
    render() {
        const { tittle, navLink, activeNavLink } = this.props.classes;
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <Movie></Movie>
                    </IconButton>
                    <Typography className={tittle} variant="h6" color="inherit">
                        Booking Movie
                    </Typography>
                    <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/">Home</NavLink>

                    {
                        this.props.accountInfor ? (
                            <span className={`${navLink} ${activeNavLink}`}>Hello, {this.props.accountInfor.hoTen}</span>
                        ) : (
                            <Fragment>
                                <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signin">Sign In</NavLink>
                                <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signup">Sign Up</NavLink>
                            </Fragment>
                        )
                    }

                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({accountInfor: state.myAccount.accountInfor})

export default connect(mapStateToProps)(withStyles(styles)(Header));