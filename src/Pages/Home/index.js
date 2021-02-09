// Library
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
// Components
import Layout from "../../Container/Layout";
import Post from "../../Components/Post";
// Redux Action
import {getAllPost} from '../../Store/Post/post-actions';
// Constants
import {Routing, Colors} from '../../Utils/CommonContants';
import Loader from "../../Components/Loader";


class HomePage extends Component {


    componentDidMount() {
        console.log("PROPS", this.props);

        this.props.getAllPost();
    }

    render() {
        const {processing, allPost} = this.props;
        return (
            <>
                <Layout>
                    <Row>
                        {processing ? (
                            <Col>
                                <Loader/>
                            </Col>
                        ) : (
                            <>
                                {allPost.map((item, key) => (
                                    <Col key={key}>
                                        <Post {...item}/>
                                    </Col>
                                ))}

                            </>
                        )}

                    </Row>
                </Layout>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        processing: state.post.processing,
        allPost: state.post.allPost,
        error: state.post.error,
    }
};

export default connect(mapStateToProps, {getAllPost})(HomePage);