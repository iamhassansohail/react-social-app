// Library
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Box, Paper} from "@material-ui/core";
import {purple, blue, lime} from '@material-ui/core/colors';
// Components
import Layout from "../../Container/Layout";
// Constants
import {Routing, Colors} from '../../Utils/CommonContants';



class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Grid container>
                    <Grid item lg={6} sm={12} xs={12}>
                        <Box component={"div"} style={{background:blue["500"]}} color={lime}>
                            Hello
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        Sohail
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}

export default HomePage