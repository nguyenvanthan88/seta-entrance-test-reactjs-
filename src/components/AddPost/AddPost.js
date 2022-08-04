import axios from 'axios';
import { useState } from 'react';

export function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function onCreatePost(e) {
        e.preventDefault();
        const postData = {
            title,
            body,
        };

        axios
            .post(
                `https://jsonplaceholder.typicode.com/posts`,
                postData,
            )
            .then((response) => {
                props.onPostAdded();
            });
    }

    return (
        <div>
            <h1 className='font-bold text-2xl'>Create Post</h1>
            <form onSubmit={onCreatePost}>
                <div className='mb-3'>
                    <label className='block'>Title: </label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border border-gray-400 w-1/2 p-1'
                        placeholder='Title'
                    />
                </div>
                <div className='mb-3'>
                    <label className='block'>Body: </label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className='border border-gray-400 w-1/2 p-1'
                        placeholder='Body'
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <button
                        type='submit'
                        className='bg-purple-500 text-white px-3 py-1'
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
}
