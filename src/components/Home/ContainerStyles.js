import styled from "styled-components"

export const Wrapper=styled.div`
   width:100vw;
   height:100vh;
   box-sizing:border-box;
   outline:none;
   border:none;
   margin:0;
   padding:0;
   position:relative;
   
   display:flex;
   flex-direction:row;
   align-items:center;
   .page-changer{
      position: absolute;
      bottom:2em;
      right:2em;
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      border:2px solid #04B4E0;
      border-radius:20px 20px 20px 20px;
      background-color:#444444;
      z-index:2;
      width: 4em;
      height: 7em;

      img{
         max-height:30px;
         max-width:30px;

      }
      img:first-child{
         margin-bottom:1.5em;

      }
   }
  
   
`
