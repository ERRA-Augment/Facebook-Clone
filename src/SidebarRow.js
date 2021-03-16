import React from "react"
import "./SidebarRow.css";

function SidebarRow(props) {
    return (
        <div className="sidebarRow">
            {props.title}

        </div>
    )
}

export default SidebarRow
