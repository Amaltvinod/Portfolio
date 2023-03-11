import styled from "styled-components"
export const Wrapper=styled.div`
      height: 100vh;
      width:5.7%;
      background-color:#222222 ;
      white-space:nowrap;
      font-size:1em;
      .navbar-item{
         display: flex;
         flex-direction:column;
         justify-content:center;
         align-items:center;
         height:6em;
         
         img{
            max-width:35px;
            max-height:35px;
         }
         border-bottom:1px solid #444444;
       
         
         
      }
      .navbar-item:hover{
         cursor:grab;
      }

   
`