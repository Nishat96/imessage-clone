import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import React from "react";
import "./Sidebar.css";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar"/>
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton variant="outlined" className="sidebar__iconButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
          <SidebarChats/>
          <SidebarChats/>
          <SidebarChats/>
      </div>
    </div>
  );
}

export default Sidebar;
