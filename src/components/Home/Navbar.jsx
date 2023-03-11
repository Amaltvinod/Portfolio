import React,{useState} from "react"
import { Wrapper } from "./NavbarStyles";

export const Navbar=()=>{
    const [icons,setIcons]=useState({
        "home":"/images/home-active.png",
        "profile":"/images/profile.png",
        "resume":"/images/resume.png",
        "education":"/images/education.png",
        "contact":"/images/contact.png"

    })
    const handleClick=(item)=>{
        if(item=="home"){
            setIcons({
            "home":"/images/home-active.png",
            "profile":"/images/profile.png",
            "resume":"/images/resume.png",
            "education":"/images/education.png",
            "contact":"/images/contact.png"
            })
        }else if(item=="profile"){
            setIcons({
                "home":"/images/home.png",
                "profile":"/images/profile-active.png",
                "resume":"/images/resume.png",
                "education":"/images/education.png",
                "contact":"/images/contact.png"

        })
        }else if(item=="resume"){

            setIcons({
                "home":"/images/home.png",
                "profile":"/images/profile.png",
                "resume":"/images/resume-active.png",
                "education":"/images/education.png",
                "contact":"/images/contact.png"

        })

        }else if(item=="education"){
            setIcons({
                "home":"/images/home.png",
                "profile":"/images/profile.png",
                "resume":"/images/resume.png",
                "education":"/images/education-active.png",
                "contact":"/images/contact.png"

        })

            
        }else{
            setIcons({
                "home":"/images/home.png",
                "profile":"/images/profile.png",
                "resume":"/images/resume.png",
                "education":"/images/education.png",
                "contact":"/images/contact-active.png"

        })


        }
    };
    return(
        <Wrapper>
            <div className="navbar-item" onClick={()=>handleClick("home")}><img src={icons.home}  alt="home-icon"/>Home</div>
            <div className="navbar-item"  onClick={()=>handleClick("profile")}><img src={icons.profile} alt="profile-icon"/>About me</div>
            <div className="navbar-item"  onClick={()=>handleClick("resume")}><img src={icons.resume}alt="resume-icon"/>Resume</div>
            <div className="navbar-item"  onClick={()=>handleClick("education")}><img src={icons.education} alt="education-icon"/>Porfolio</div>
            <div className="navbar-item"  onClick={()=>handleClick("contact")}><img src={icons.contact} alt="contact-icon"/>Contact</div>
        </Wrapper>

            

       
    )
}