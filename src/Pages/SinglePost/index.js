// Library
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from "../../Container/Layout";
import {Row, Col} from 'react-bootstrap';
import Post from "../../Components/Post";
import Loader from "../../Components/Loader";
// Redux Actions
import {getPostById} from "../../Store/Post/post-actions";

class SinglePost extends Component {

    componentDidMount() {
        console.log("PARAMS", this.props.match.params);
        const params = this.props.match.params;
        if (params.hasOwnProperty("id")) {
            this.props.getPostById(params.id);
        }
    }

    render() {
        const {singlePost, processing} = this.props;
        return (
            <Layout>
                <Row>
                    <Col>
                        {processing ? (
                            <>
                                <Loader/>
                            </>
                        ) : (
                            <Post {...singlePost} noButton/>
                        )}

                    </Col>
                </Row>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        processing: state.post.processing,
        singlePost: state.post.singlePost
    }
}

export default connect(mapStateToProps, {getPostById})(SinglePost);