import React, { Component } from 'react'
import { Container } from "@material-ui/core"
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default class Layout extends Component {
    render() {
        return (
            <Container fluid maxWidth="lg" style={{ backgroundColor: "#fffff0", padding: "0px" }}>
                <Header></Header>

                {this.props.children}

                <Footer></Footer>
            </Container>
        )
    }
}
