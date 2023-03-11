import styled from "styled-components";
export const Wrapper=styled.div`
      height: 100vh;
      width: 27.3%;
      background-color:#444444;
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content:flex-start;
      padding-top:5em;
      color:#F5F5F5;
      white-space:nowrap;
      img{
        border-radius:50%;
        max-width:200px;
        max-height:200px;
        margin-bottom:3em;
      }
      button{
         background-color:#444444;
         color:white;
         width: 11em;
         height: 3.5em;
         border-radius:20px 20px 20px 20px;
         border:1px solid white;
         font-weight:bold;
         color:"#ECECEC"
         font-size:2em;
      }
      button:hover{
        background-color:white;
        color:#05AED8;
    
      }
      .profile-details{
        h3{
            padding-bottom:0.7em;
            font-size:1.8em;
            color:"#F5F5F5"
        }
        p{

            margin-left:2em;
            color:"#B2B2B2"
        }
      }
`