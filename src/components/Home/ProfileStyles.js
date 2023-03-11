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
         border-radius:5%;
         border:1px solid white;
         font-weight:bold;
      }
      button:hover{
        background-color:white;
        color:#05AED8;
    
      }
      .profile-details{
        h3{
            padding-bottom:0.7em;
            font-size:1.8em;
        }
        p{

            margin-left:2em;
        }
      }
`