import React from 'react'
import "./Widgets.css"

function Widgets() {
    return <div className="widgets">

        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCode.org%2Fvideos%2F760738281497253%2F&width=340&show_text=true&height=460&appId" 
        width="340" 
        height="100%" 
        title="widget1"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
        </iframe>



    </div>
}

export default Widgets
