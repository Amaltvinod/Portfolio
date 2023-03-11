import React from "react";
import { Wrapper } from "./ProfileStyles";
export const Profile=()=>{
    return(
        <Wrapper>
            <img src="/images/user-profile.jpg" alt="user-profile" />
            <div className="profile-details">
                <h3>Amal T Vinod</h3>
                <p>Web Developer</p>
                <div className="social-profile-links">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
            <div className="resume">
                <button>Download cv</button>
            </div>
        </Wrapper>
    )
}