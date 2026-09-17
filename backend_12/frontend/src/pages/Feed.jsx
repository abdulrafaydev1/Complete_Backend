 import React, { useState } from "react";

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image:
                "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
            caption: "beautifull scenery",
        },
    ]);

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
 
