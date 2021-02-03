// Library
import React, {Component} from 'react';
import {Container, Grid} from '@material-ui/core';


class Layout extends Component {
    render() {
        return (
            <Container maxWidth={"lg"} component={"main"} disableGutters={true}>
                <Grid>
                    {this.props.children}
                </Grid>
            </Container>
        )
    }
}

export default Layout