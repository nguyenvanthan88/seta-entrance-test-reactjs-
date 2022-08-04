import axios from 'axios';
import { useEffect, useState } from 'react';

export function FunctionalSinglePostDetails(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (post && post.id === props.id) {
            return;
        }
        getPostDetails();
    });

    function getPostDetails() {
        axios.get(`/posts/${props.id}`).then((response) => {
            setPost({ ...response.data, id: props.id });
        });
    }

    if (post) {
        return (
            <div className='my-2 border border-gray-300 shadow p-4'>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
            </div>
        );
    }
    return null;
}
