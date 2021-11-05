import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styles } from "./style"

class AccountInfor extends Component {
    render() {
        return (
            <div>
                <h1>My Account Infor</h1>
            </div>
        )
    }
}

export default connect()(withStyles(styles)(AccountInfor))