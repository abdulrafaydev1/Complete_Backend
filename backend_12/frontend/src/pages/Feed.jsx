import React, { useState, useEffect } from "react";
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image:
                "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
            caption: "beautifull scenery",
        },
    ]);

    useEffect(()=> {

        axios.get('http://localhost:3013/posts')
        .then((res) => {
            console.log(res.data)
            setPosts(res.data.posts)
        })
        
    }, [])

    return (
        <div>
            <section className="feed-section">

                {posts.map((post) => (
                    <div className="post-card" key={post._id}>

                        <img
                            src={post.image}
                            alt={post.caption}
                            className="post-image"
                        />

                        <p className="post-caption">
                            {post.caption}
                        </p>

                    </div>
                ))}

            </section>
        </div>
    );
};

export default Feed;
 
