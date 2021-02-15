// Library
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Layout from "../../Container/Layout";
import {Row, Col, Card} from 'react-bootstrap';
import Post from "../../Components/Post";
import Loader from "../../Components/Loader";
// Redux Actions
import {getPostById} from "../../Store/Post/post-actions";
import {getAllCommentsByPostId} from '../../Store/Comments/comments-actions';

class SinglePost extends Component {

    componentDidMount() {
        console.log("PARAMS", this.props.match.params);
        const params = this.props.match.params;
        if (params.hasOwnProperty("id")) {
            this.props.getPostById(params.id, (error) => {
                if (!error) {
                    this.props.getAllCommentsByPostId(params.id);
                }
            });

        }

    }

    render() {
        const {
            singlePost,
            processing,
            commentsProcessing,
            comments
        } = this.props;
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
                <Row className={"mt-5"}>
                    {processing || commentsProcessing ? (
                        <Col>
                            <>
                                <Loader/>
                            </>
                        </Col>
                    ) : (
                        <>
                            {comments.map((comment, key) => (
                                <Col lg={12} className={"mt-1"} key={key}>
                                    <Card border={"primary"}>
                                        <Card.Title>{comment.name}</Card.Title>
                                        <Card.Subtitle>{comment.email}</Card.Subtitle>
                                        <Card.Text>{comment.body}</Card.Text>
                                    </Card>
                                </Col>
                            ))}

                        </>
                    )}
                </Row>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        processing: state.post.processing,
        singlePost: state.post.singlePost,
        commentsProcessing: state.mereComments.processing,
        comments: state.mereComments.comments
    }
}

export default connect(mapStateToProps, {getPostById, getAllCommentsByPostId})(SinglePost);