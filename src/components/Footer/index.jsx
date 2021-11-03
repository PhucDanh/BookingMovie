import { Box, Container, Grid } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core'
import { styles } from "./styles"
import { Facebook, Twitter, Instagram } from "@material-ui/icons"

class Footer extends Component {
    render() {
        const { footer, textTitle, textLink } = this.props.classes;
        return (
            <Container className={footer} maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={3}>
                        <Box className={textTitle} borderBottom={1}>GET IN TOUCH</Box>
                        <Box>
                            <Link className={textLink} href="/">FAQs</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Give us feedback</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Contact us</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box className={textTitle} borderBottom={1}>ABOUT MOVIE STAR</Box>
                        <Box>
                            <Link className={textLink} href="/">About us</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Find us</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Schedule</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">News</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box className={textTitle} borderBottom={1}>LEGAL STUFF</Box>
                        <Box>
                            <Link className={textLink} href="/">Terms vs Conditions</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Privacy policy</Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">Cookie policy</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box className={textTitle} borderBottom={1}>CONNECT WITH US</Box>
                        <Box>
                            <Link className={textLink} href="/">
                                <Facebook />
                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">
                                <Twitter />
                                Twitter
                            </Link>
                        </Box>
                        <Box>
                            <Link className={textLink} href="/">
                                <Instagram />
                                Instagram
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withStyles(styles)(Footer);