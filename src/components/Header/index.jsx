import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, IconButton, withStyles } from "@material-ui/core"
import { Movie } from "@material-ui/icons"
import { styles } from "./style"

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
                    <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signin">Sign In</NavLink>
                    <NavLink className={navLink} activeClassName={activeNavLink} component={Button} exact to="/signup">Sign Up</NavLink>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);