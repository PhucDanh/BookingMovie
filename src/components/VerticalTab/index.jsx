import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Box, Typography, Tab, Tabs, Avatar } from '@material-ui/core';
import VerticalTabItem from '../VerticalTabItem';
import { Alert } from '@material-ui/lab';

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

export default class VerticalTab extends Component {
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
        return (
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
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
                        this.props.lstCumRap.map((item, i) => {
                            return (
                                <Tab key={i} style={{ height: "100px" }} icon={<Avatar alt={item.maCumRap} src={item.hinhAnh} />} label={item.tenCumRap} iconPosition="start" wrapped={true} {...a11yProps(i)} />
                            )
                        })
                    }
                </Tabs>
                {
                    this.props.lstCumRap.map((item, i) => {
                        var index = item.danhSachPhim.findIndex((item) => {
                            return item.maPhim === this.props.movieDetail.maPhim;
                        });
                        if (!(index === -1)) {
                            return (
                                <TabPanel key={i} value={this.state.value} index={i} >
                                    <Typography 
                                        style={{
                                            color: "#ff6347",
                                            fontSize: "25px",
                                            fontStyle: "italic",
                                            fontWeight: "900",
                                        }}
                                    >{item.diaChi}</Typography>
                                    <VerticalTabItem 
                                      lichPhimDaChon={item.danhSachPhim[index]}
                                      tenCumRap={item.tenCumRap}
                                      diaChi={item.diaChi}
                                    >  
                                    </VerticalTabItem>
                                </TabPanel>
                            )
                        } else return (
                            <TabPanel key={i} value={this.state.value} index={i} >
                                <Alert severity="info">Không có suất chiếu !!!</Alert>
                            </TabPanel>
                        );
                    })
                }
            </Box>
        );
    }
}
