import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Dynamic } from "./Dynamic";
import { Wrapper } from "./ContainerStyles";
export const Container=()=>{
    const [sources,setSources]=useState(["/images/right-arrow.png","/images/left-arrow.png"]);
    const clickHandler=(src)=>{
        if(src==0){
            setSources([
                "/images/right-arrow-active.png",
                "/images/left-arrow.png"
            ])
        }else{
            setSources([
                "/images/right-arrow.png",
                "/images/left-arrow-active.png"
            ])
        }

    }
    return(
   <Wrapper>
        <Navbar/>
        <Profile/>
        <Dynamic/>
        <div className="page-changer">
            <img src={sources[0]} onClick={()=>clickHandler(0)}></img>
            <img src={sources[1]} onClick={()=>clickHandler(1)}></img>
        </div>
    
   </Wrapper>
     
    )
}