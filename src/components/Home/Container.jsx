import React from "react";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import { Dynamic } from "./Dynamic";
import { Wrapper } from "./ContainerStyles";
export const Container=()=>{
    return(
   <Wrapper>
        <Navbar/>
        <Profile/>
        <Dynamic/>
    
   </Wrapper>
     
    )
}