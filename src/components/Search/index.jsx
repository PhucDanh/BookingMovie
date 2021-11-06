import React, { Component } from 'react'
import { Box, Grid, TextField } from "@material-ui/core"
import MovieItem from '../MovieItem'
import { Autocomplete } from '@material-ui/lab'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSearch: [],
        }
    }

    handleSearchChange = (event, value) => {
        console.log("search", event, value)
        this.setState({
            arrSearch: [...value]
        });
        this.props.checkSearching(value);
    }

    render() {
        return (
            <Box>
                <Grid style={{ margin: "10px 30px", padding: "20px 50px" }}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={[...this.props.movieList]}
                        getOptionLabel={(option) => option.tenPhim}
                        onChange={this.handleSearchChange}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Films"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Grid>
                <Grid container spacing={2}>
                    {
                        this.state.arrSearch.map((item) => {
                            return (
                                <Grid key={item.maPhim} xs={12} sm={6} md={3} item>
                                    <MovieItem item={item}></MovieItem>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        )
    }
}
