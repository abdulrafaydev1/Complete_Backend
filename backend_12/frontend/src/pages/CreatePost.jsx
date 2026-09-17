 import React from "react";
import "./CreatePost.css";
import axios from 'axios'

const CreatePost = () => {


    const hancdleSubmit = async (e) =>{

        e.preventDefault()

        const formData = new formData(e.target)

        axios.post('http://localhost:3013/create-post' , formData)
        .then((res) => {

            // alert('post created')
            // e.target.reset()

            console.log(res)
            
        })

        .catch((err)=>{
            console.log(err)
            alert('koi masla hai post sahi se create karo')

        })
        
    }
    
    
    return (
        <div className="create-post-page">
            <form onSubmit={hancdleSubmit} className="create-post-form" >

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
 
