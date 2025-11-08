import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import "../App.css"
import { Context } from "../context/context";
export const SideBar=()=>{
    const{newChat}=useContext(Context);
       return (
        <> 
            <div className="box-container">
                <div className="menu">
                    <div className="newDiv">
                        <button onClick={newChat} className="newPage">
                            <img src="/images/plus.png" /> 
                            <span className="newChat">New Chat</span>
                        </button>
                    </div>
                    <div className="recents">
                        <NavLink to="recent">
                            <button>
                                <img src="/images/history.png" />
                                <p>Recent</p>
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="contactPage">
                            <button className="help">
                                <img src="/images/help.png" />
                                <p>Contact Us</p>
                            </button>
                        </NavLink>
                        
                    </div>
                    <div>
                        <NavLink to="activity">
                            <button className="history">
                                <img src="/images/eye.png" />
                                <p>Activity</p>
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="settings">
                            <button className="setting">         
                                <img src="/images/system.png" />
                                <p>Settings</p>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
       )
}