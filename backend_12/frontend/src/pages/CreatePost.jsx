 
import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
    return (
        <div className="create-post-page">
            <form className="create-post-form">

                <h1>Create Post</h1>

                <div className="input-group">
                    <label htmlFor="image">Upload Image</label>

                    <input
                        id="image"
                        type="file"
                        name="image"
                        accept="image/*"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="caption">Caption</label>

                    <input
                        id="caption"
                        type="text"
                        name="caption"
                        required
                        placeholder="Write a caption..."
                    />
                </div>

                <button type="submit" className="submit-button">
                    Create Post
                </button>

            </form>
        </div>
    );
};

export default CreatePost;
 
