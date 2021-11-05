import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Box, Typography, Tab, Tabs, Avatar, withStyles } from '@material-ui/core';
import { styles } from "./style"
import VerticalTab from '../VerticalTab';

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

class VerticalTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    };

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    render() {
        // const { tabs } = this.props.classes;
        return (
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500, marginTop:"40px" }}
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
                        this.props.movieCinemaList.map((item, i) => {
                            return (
                                <Tab key={i} style={{height: "80px"}} icon={<Avatar alt={item.maHeThongRap} src={item.logo} />} {...a11yProps(i)} />
                            )
                        })
                    }
                </Tabs>
                {
                    this.props.movieCinemaList.map((item, i) => {
                        return (
                            <TabPanel key={i} value={this.state.value} index={i}>
                                <VerticalTab lstCumRap={item.lstCumRap} movieDetail={this.props.movieDetail}></VerticalTab>
                            </TabPanel>
                        )
                    })
                }
            </Box>
        );
    }
}

export default withStyles(styles)(VerticalTabs)