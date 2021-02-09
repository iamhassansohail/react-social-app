// Library
import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = (props) => {
    return (
        <>
            <Card style={{width: '250px'}} className={"mt-5"}>
                <Card.Img variant="top" src="https://via.placeholder.com/200X150?text=dummy"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    {!props.noButton ? (
                        <a href={'/post/' + props.id}>
                            <Button variant="primary">Read Post</Button>
                        </a>
                    ) : null}

                </Card.Body>
            </Card>
        </>
    )
}

export default Post;