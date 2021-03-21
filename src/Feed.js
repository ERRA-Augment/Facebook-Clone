import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return <div className="feed">

        <StoryReel />
        <MessageSender />

        <Post 
        profilePic="https://image.flaticon.com/icons/png/512/21/21294.png"
        message="Wow this works!"
        timestamp="This is my timestamp"
        username="TestFace"
        image="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
        />

        <Post 
        profilePic="https://image.flaticon.com/icons/png/512/21/21294.png"
        message="Wow this works!"
        timestamp="This is my timestamp"
        username="TestFace"
        />
        <Post />
        <Post />
        
       
            
        </div>;
}

export default Feed
