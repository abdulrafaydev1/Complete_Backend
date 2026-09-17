import React from "react";

const posts = [
  {
    id: 1,
    username: "abdulrafay",
    profileImage: "https://i.pravatar.cc/150?img=12",
    postImage:
      "https://www.youtube.com/8402d0a0-4dec-49bb-a520-8e82fad0a345",
    caption: "Working on my new React project 🚀",
    likes: 124,
  },
  {
    id: 2,
    username: "developer_rafay",
    profileImage: "https://i.pravatar.cc/150?img=32",
    postImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    caption: "Coding mode ON 💻🔥",
    likes: 89,
  },
  {
    id: 3,
    username: "rafay.designs",
    profileImage: "https://i.pravatar.cc/150?img=45",
    postImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    caption: "Designing something beautiful ✨",
    likes: 203,
  },
];

const Feed = () => {
  return (
    <main className="feed-page">

      <div className="feed-container">

        {posts.map((post) => (
          <article className="post-card" key={post.id}>

            {/* Post Header */}
            <div className="post-header">

              <div className="user-info">
                <img
                  src={post.profileImage}
                  alt={post.username}
                  className="profile-image"
                />

                <div>
                  <h3>{post.username}</h3>
                  <span>2 hours ago</span>
                </div>
              </div>

              <button className="more-button">•••</button>

            </div>

            {/* Post Image */}
            <div className="post-image-container">
              <img
                src={post.postImage}
                alt="Post"
                className="post-image"
              />
            </div>

            {/* Actions */}
            <div className="post-actions">

              <div className="left-actions">
                <button className="action-button">♡</button>
                <button className="action-button">💬</button>
                <button className="action-button">↗</button>
              </div>

              <button className="action-button">♡</button>

            </div>

            {/* Likes */}
            <div className="likes">
              {post.likes} likes
            </div>

            {/* Caption */}
            <div className="caption">
              <strong>{post.username}</strong>{" "}
              {post.caption}
            </div>

            {/* Comments */}
            <button className="comments-button">
              View all comments
            </button>

            {/* Add Comment */}
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
              />
              <button>Post</button>
            </div>

          </article>
        ))}

      </div>

    </main>
  );
};

export default Feed;