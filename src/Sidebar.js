
import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow src="https://avatars.githubusercontent.com/u/80663653?s=460&u=cab7da31e433fdf5fe6b6b414e256591d36076cf&v=4" title="Elegence" />

            <SidebarRow Icon={LocalHospitalIcon} title="COVID Information Center" />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />            
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />      
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />

   

        </div>
    )
}
