import React, { Component } from 'react'
import { Container, Grid, Box, Button, withStyles, Avatar, Typography, List, ListItem, Divider, Tabs, Tab } from '@material-ui/core'
import { Home } from "@material-ui/icons"
import { styles } from "./style"
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AccountInfor from '../../components/AccountInfor';
import MyTicket from '../../components/MyTicket';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchMe } from '../../store/action/auth';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedInfor: null,
            selectedTicket: null,
            value: 0
        }
    }

    handleSelectInfor = () => {
        this.setState({
            selectedInfor: true,
            selectedTicket: false
        })
    }

    handleSelectTicket = () => {
        this.setState({
            selectedInfor: false,
            selectedTicket: true
        })
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    renderMyticket = (account) => {
        const { hoTen, email, thongTinDatVe } = account;
        return (
            <Box
                style={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 800, margin: "40px 10px 20px" }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.value}
                    onChange={this.handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {
                        thongTinDatVe.map((item, i) => {
                            return (
                                <Tab key={i} style={{ height: "100px" }} icon={<Avatar alt={item.tenPhim} src={item.hinhAnh} />} label={item.tenPhim + " __ " + moment(item.ngayDat).format("DD/MM")} iconPosition="start" wrapped={true} {...a11yProps(i)} />
                            )
                        })
                    }
                </Tabs>
                {
                    thongTinDatVe.map((item, i) => {
                        return (
                            <TabPanel key={i} value={this.state.value} index={i} style={{ margin: "30px" }} >
                                <MyTicket hoTen={hoTen} email={email} thongTinTungVe={item}></MyTicket>
                            </TabPanel>
                        )
                    })
                }
            </Box>
        )
    }

    renderAccountInfor = (account) => {
        return (
            <AccountInfor account={account}></AccountInfor>
        )
    }

    render() {
        const { columnLeft, columnRight } = this.props.classes;
        return (
            <Container fluid maxWidth="lg"
                style={{
                    backgroundColor: "#fffff0",
                    padding: "0px",
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh"
                }} >
                <Grid container>
                    <Grid className={columnLeft} xs={2} md={3} item>
                        <div style={{ margin: "5px" }}>
                            <Box className="boxItem">
                                <div className>
                                    <Avatar
                                        alt="Phuc Danh"
                                        src="https://picsum.photos/200"
                                        style={{ width: "250px", height: "250px", marginBottom: "20px" }}
                                    />
                                    {/* <Typography variant="h4" color="secondary"
                                        style={{
                                            fontWeight: "bold",
                                            margin: "10px auto",
                                            textAlign: "center"
                                        }}>
                                        {hoTen}
                                    </Typography> */}
                                </div>
                            </Box>
                            <Box className="boxItem">
                                <div>
                                    <List style={{
                                        width: '100%',
                                        minWidth: 280,
                                        maxWidth: 400,
                                        bgcolor: 'background.paper',
                                        margin: "20px auto"
                                    }} component="nav" aria-label="mailbox folders">
                                        <Divider />
                                        <ListItem className="listItem" button onClick={this.handleSelectInfor}>
                                            <Typography className="listText">Thông tin tài khoản</Typography>
                                        </ListItem>
                                        <Divider />
                                        <ListItem className="listItem" button divider onClick={this.handleSelectTicket}>
                                            <Typography className="listText">Vé của tôi</Typography>
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </div>
                            </Box>
                            <Box className="boxItem">
                                <div style={{ marginTop: "150px" }}>
                                    <NavLink className="link" to={"/"}>
                                        <Button className="button" size="small" color="primary">
                                            <Home style={{ fontSize: "40px" }}></Home>
                                        </Button>
                                    </NavLink>
                                </div>
                            </Box>
                        </div>
                    </Grid>
                    <Grid className={columnRight} xs={9} md={9} item>
                        <div style={{ margin: "5px" }}>
                            {
                                (this.state.selectedInfor) ? (
                                    this.renderAccountInfor(this.props.accountInfor)
                                ) : (() => { return null })
                            }
                            {
                                (this.state.selectedTicket) ? (
                                    this.renderMyticket(this.props.accountInfor)
                                ) : (() => { return null })
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    componentDidMount() {
        this.props.dispatch(fetchMe);
    }
}

const mapStateToProps = (state) => {
    return {
        accountInfor: state.myAccount.accountInfor
    }
}

export default connect(mapStateToProps)(withStyles(styles)(MyAccount))